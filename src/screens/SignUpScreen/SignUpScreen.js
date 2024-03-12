import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  Alert, // Added Alert import
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import CustomInput from '../../components/CustomInput';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {SignupSvg} from '../../constants/SvgPath';
import CustomHeader from '../../components/CustomHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomErrorMessage from '../../components/CustomErrorMessage';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/FirebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const checkUserData = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedName = await AsyncStorage.getItem('name');
      const storePassword = await AsyncStorage.getItem('password');
      if (storedEmail && storedName && storePassword) {
        navigation.navigate(NavigationStringPath.TABSCREENS);
      }
    };

    checkUserData();
  }, []);

  const validation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailMaxLength = 50;
    const passwordMaxLength = 30;
    const nameMaxLength = 50;

    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
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

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your Password');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    }

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      FirebaseSignUp();
    }
  };

  const FirebaseSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('password', password);

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.SETTINGSCREEN,
        params: {userEmail: email, userName: name},
      });

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.PROFILESCREEN,
        params: {userId: userCredential.user.uid, name: name},
      });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'That email address is invalid!');
      } else {
        Alert.alert('Error', 'Error creating user: ' + error.message);
      }
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{
          paddingBottom: moderateVerticalScale(100),
          backgroundColor: '#fff',
        }}
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
                height={moderateScale(200)}
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
                  inputStyle={{width: '100%'}}
                  placeholder="Full Name"
                  onChangeText={text => setName(text)}
                />
              </View>
              <CustomErrorMessage text={nameError} />
              <View style={styles.textinputName}>
                <CustomInput
                  inputStyle={{width: '100%'}}
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

              <View style={styles.textinputPassword}>
                <CustomInput
                  inputStyle={{width: '90%'}}
                  secureTextEntry={secureConfirmTextEntry}
                  placeholder="Confirm Password"
                  rightIcon={
                    setSecureConfirmTextEntry
                      ? 'eye-off-outline'
                      : 'eye-outline'
                  }
                  onChangeText={text => setConfirmPassword(text)}
                  onPressRight={() =>
                    setSecureConfirmTextEntry(!secureConfirmTextEntry)
                  }
                />
              </View>
              <CustomErrorMessage text={confirmPasswordError} />

              <View style={{marginTop: moderateScale(0)}}>
                <CustomButton
                  text={'Sign up'}
                  onPress={() => {
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
                {/* <Text style={styles.loginTextStyle}>Log in</Text> */}
                <Text style={styles.loginTextStyle}>back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SignUpScreen;
