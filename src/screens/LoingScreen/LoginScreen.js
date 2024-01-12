import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ImagePath from '../../constants/ImagePath';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import CustomImage from '../../components/CustomImage';
import CustomInput from '../../components/CustomInput';
import CustomIcon from '../../components/CustomIcon';
import {scale} from 'react-native-size-matters';

const LoginScreen = () => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.INTROSCREEN2);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageView}>
          <Image source={ImagePath.LOGINIMG} style={styles.image} />
        </View>
        <View style={styles.welcomeTextView}>
          <CustomWelcomeText text={'Log in'} />
        </View>
        <View style={styles.descriptionTextView}>
          <CustomDescriptionText text={'Login with social networks '} />
        </View>

        <View style={styles.iconView}>
          <CustomImage source={ImagePath.FACEBOOKICON} resizeMode="contain" />
          <CustomImage source={ImagePath.GOOGLEICON} resizeMode="contain" />
          <CustomImage source={ImagePath.INSTAGRAMICON} resizeMode="contain" />
        </View>

        <View style={styles.textinputView}>
          <View style={styles.textinputTop}>
            <CustomInput
              placeholder="Email"
              onchangeText={text => {
                setValue(text);
              }}
            />
          </View>
          <View style={styles.textinputPassword}>
            <CustomInput
              inputStyle={{width: '90%'}}
              secureTextEntry={secureTextEntry}
              placeholder="Password"
              onChangeText={text => {
                setValue(text);
              }}
              rightIcon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
              onPressRight={() => setSecureTextEntry(!secureTextEntry)}
            />
          </View>
        </View>

        <View style={styles.forgotPasswordView}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Forgot');
            }}>
            <Text style={styles.forgotPasswordTextStyle}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <CustomButton
            text={'Log in'}
            onPress={() => {
              NextScreen();
            }}
          />
        </View>
        <View style={styles.SignUpView}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Sign Up');
            }}>
            <Text style={styles.signUpTextStyle}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
