import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';

const EditScreen = ({route}) => {
  const {userDisplayName, userEmailState} = route.params;
  const [name, setName] = useState(userDisplayName);
  const [email, setEmail] = useState(userEmailState);
  const [password, setPassword] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    setName(userDisplayName);
    setEmail(userEmailState);
    setPassword('');
  }, [userDisplayName, userEmailState]);

  const handleSave = () => {
    const newName = updatedName !== '' ? updatedName : name;
    const newEmail = updatedEmail !== '' ? updatedEmail : email;
    const newPassword = updatedPassword !== '' ? updatedPassword : password;

    navigation.navigate(NavigationStringPath.SETTINGSCREEN, {
      updatedName: newName,
      updatedEmail: newEmail,
    });
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        iconName={'chevron-back'}
        onPress={() => navigation.goBack()}
        text={'Edit Information'}
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={updatedName !== '' ? updatedName : name}
          onChangeText={text => setUpdatedName(text)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={updatedEmail !== '' ? updatedEmail : email}
          onChangeText={text => setUpdatedEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={updatedPassword !== '' ? updatedPassword : password}
          onChangeText={text => setUpdatedPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditScreen;
