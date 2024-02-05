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
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ImagePath from '../../constants/ImagePath';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import CustomImage from '../../components/CustomImage';
import CustomInput from '../../components/CustomInput';
import {moderateScale, scale} from 'react-native-size-matters';
import {LoginSvg} from '../../constants/SvgPath';
import CustomErrorMessage from '../../components/CustomErrorMessage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/FirebaseAuth';

const LoginScreen = ({}) => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.TABSCREENS);
  };

  const validation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailMaxLength = 50;
    const passwordMaxLength = 30;

    setEmailError('');
    setPasswordError('');

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

    if (!emailError && !passwordError) {
      FirebaseLogin();
    }
  };

  const FirebaseLogin = async () => {
    try {
      const userLoginCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.HOMESCREEN,
        params: {name: userLoginCredential.user.displayName},
      });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{flex: 1}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <SafeAreaView style={styles.container}>
            <View style={{marginHorizontal: moderateScale(16)}}>
              <View style={styles.imageView}>
                <LoginSvg
                  width={moderateScale(310)}
                  height={moderateScale(210)}
                />
              </View>
              <View style={styles.welcomeTextView}>
                <CustomWelcomeText text={'Log in'} />

                <CustomDescriptionText
                  text={'Login with social networks '}
                  marginTop={moderateScale(8)}
                  lineHeight={21}
                />

                <View style={styles.iconView}>
                  <CustomImage
                    source={ImagePath.FACEBOOKIMG}
                    resizeMode="contain"
                    onPress={() => {
                      Alert.alert('Facebook');
                    }}
                  />
                  <CustomImage
                    source={ImagePath.INSTAGRAMIMG}
                    resizeMode="contain"
                    onPress={() => {
                      Alert.alert('Instagram');
                    }}
                  />
                  <CustomImage
                    source={ImagePath.GOOGLEIMG}
                    resizeMode="cover"
                    onPress={() => {
                      Alert.alert('Google');
                    }}
                  />
                </View>
              </View>
              <View style={styles.textinputView}>
                <View style={styles.textinputTop}>
                  <CustomInput
                    // autoFocus={true}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    inputStyle={{width: '100%'}}
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

                <View style={styles.forgotPasswordView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(NavigationStringPath.FORGOTSCREEN);
                    }}>
                    <Text style={styles.forgotPasswordTextStyle}>
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: moderateScale(0)}}>
                  <CustomButton
                    text={'Log in'}
                    onPress={() => {
                      // NextScreen();
                      validation();
                    }}
                  />
                </View>
              </View>
              <View style={styles.SignUpView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(NavigationStringPath.SIGNUPSCREEN);
                  }}>
                  <Text style={styles.signUpTextStyle}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;
