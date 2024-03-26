import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import styles from './Styles';
import CustomButton from '../../components/CustomButton';
import CustomTheme from '../../constants/CustomTheme';

const EditScreen = ({route}) => {
  const {userDisplayName, userEmailState} = route.params;
  const [name, setName] = useState(userDisplayName);
  const [email, setEmail] = useState(userEmailState);
  const [password, setPassword] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');

  const navigation = useNavigation();
  const {darkBackgroundColor, darkBorderColor, darkmodeColor} = CustomTheme();

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
    <View style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
      <SafeAreaView
        style={[styles.subContainer, {backgroundColor: darkBackgroundColor}]}>
        <View style={styles.marginContainer}>
          <CustomHeader
            color={darkmodeColor}
            iconName={'chevron-back'}
            onPress={() => navigation.goBack()}
            text={'Edit Information'}
          />
          <View style={styles.formContainer}>
            <Text style={[styles.label, {color: darkmodeColor}]}>Name</Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: darkBackgroundColor,
                  color: darkmodeColor,
                  borderColor: darkBorderColor,
                },
              ]}
              value={updatedName !== '' ? updatedName : name}
              onChangeText={text => setUpdatedName(text)}
            />
            <Text style={[styles.label, {color: darkmodeColor}]}>Email</Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: darkBackgroundColor,
                  color: darkmodeColor,
                  borderColor: darkBorderColor,
                },
              ]}
              value={updatedEmail !== '' ? updatedEmail : email}
              onChangeText={text => setUpdatedEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={[styles.label, {color: darkmodeColor}]}>Password</Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: darkBackgroundColor,
                  color: darkmodeColor,
                  borderColor: darkBorderColor,
                },
              ]}
              value={updatedPassword !== '' ? updatedPassword : password}
              onChangeText={text => setUpdatedPassword(text)}
              secureTextEntry={true}
            />

            <CustomButton
              text={'Save'}
              onPress={() => {
                handleSave();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default EditScreen;
