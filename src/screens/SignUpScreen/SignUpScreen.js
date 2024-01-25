import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import CustomInput from '../../components/CustomInput';
import {moderateScale, scale} from 'react-native-size-matters';
import {SignupSvg} from '../../constants/SvgPath';
import CustomHeader from '../../components/CustomHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomErrorMessage from '../../components/CustomErrorMessage';

const SignUpScreen = () => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.PROFILESCREEN);
  };

  const validation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailMaxLength = 50;
    const passwordMaxLength = 30;
    const nameMaxLength = 50;

    setEmailError('');
    setPasswordError('');
    setNameError('');

    if (!name) {
      setNameError('Please enter your Name');
    } else if (name.length > nameMaxLength) {
      setNameError(`Name must be less than ${nameMaxLength} characters`);
    }

    if (!email) {
      setEmailError('Please enter Email Address');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid Email Address');
    } else if (email.length > emailMaxLength) {
      setEmailError(
        `Email Address must be less than ${emailMaxLength} characters`,
      );
    }

    if (!password) {
      setPasswordError('Please enter Password');
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character',
      );
    } else if (password.length > passwordMaxLength) {
      setPasswordError(
        `Password must be less than ${passwordMaxLength} characters`,
      );
    }

    if (!nameError && !emailError && !passwordError) {
      // NextScreen();
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{flex: 1}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <View style={{marginHorizontal: moderateScale(16)}}>
            <CustomHeader
              iconName={'chevron-back'}
              color={'#000'}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <View style={styles.imageView}>
              <SignupSvg
                width={moderateScale(310)}
                height={moderateScale(210)}
              />
            </View>
            <View style={styles.welcomeTextView}>
              <CustomWelcomeText text={'Sign up'} />

              <CustomDescriptionText
                text={'Create your account '}
                marginTop={moderateScale(8)}
                lineHeight={21}
              />
            </View>

            <View style={styles.textinputView}>
              <View style={styles.textinputName}>
                <CustomInput
                  placeholder="Name"
                  onChangeText={text => setName(text)}
                />
              </View>
              <CustomErrorMessage text={nameError} />
              <View style={styles.textinputName}>
                <CustomInput
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <CustomErrorMessage text={emailError} />

              <View style={styles.textinputPassword}>
                <CustomInput
                  inputStyle={{width: '90%'}}
                  secureTextEntry={secureTextEntry}
                  placeholder="Password"
                  onChangeText={text => setPassword(text)}
                  rightIcon={
                    secureTextEntry ? 'eye-off-outline' : 'eye-outline'
                  }
                  onPressRight={() => setSecureTextEntry(!secureTextEntry)}
                />
              </View>
              <CustomErrorMessage text={passwordError} />

              <View style={{marginTop: moderateScale(0)}}>
                <CustomButton
                  text={'Sign up'}
                  onPress={() => {
                    // NextScreen();
                    validation();
                  }}
                />
              </View>
            </View>

            <View style={styles.loginView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationStringPath.LOGINSCREEN);
                }}>
                <Text style={styles.loginTextStyle}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SignUpScreen;
