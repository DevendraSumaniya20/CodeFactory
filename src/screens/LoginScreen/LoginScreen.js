import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  Keyboard,
  useColorScheme,
  Platform,
  Appearance,
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
import {moderateScale} from 'react-native-size-matters';
import {LoginSvg} from '../../constants/SvgPath';
import CustomErrorMessage from '../../components/CustomErrorMessage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/FirebaseAuth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleClientId} from '../../utils/GoogleLogin';
import {useDispatch, useSelector} from 'react-redux';
import {setEmail, setPassword} from '../../redux/Slices/authSlice';
import CustomTheme from '../../constants/CustomTheme';

const LoginScreen = ({}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const reduxAuth = useSelector(state => state.auth);
  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GoogleClientId,
    });
    checkSavedCredentials();
    checkGoogleLogin();
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GoogleClientId,
    });
    checkSavedCredentials();
    checkGoogleLogin();
  }, []);

  const validation = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailMaxLength = 50;
    const passwordMaxLength = 30;

    setEmailError('');
    setPasswordError('');

    if (!reduxAuth.email) {
      setEmailError('Please enter Email Address');
    } else if (!emailRegex.test(reduxAuth.email)) {
      setEmailError('Invalid Email Address');
    } else if (reduxAuth.email.length > emailMaxLength) {
      setEmailError(
        `Email Address must be less than ${emailMaxLength} characters`,
      );
    }

    if (!reduxAuth.password) {
      setPasswordError('Please enter Password');
    } else if (!passwordRegex.test(reduxAuth.password)) {
      setPasswordError(
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character',
      );
    } else if (reduxAuth.password.length > passwordMaxLength) {
      setPasswordError(
        `Password must be less than ${passwordMaxLength} characters`,
      );
    }

    if (!emailError && !passwordError) {
      FirebaseLogin();
    }
  };

  const checkGoogleLogin = async () => {
    try {
      const googleLoginInfo = await AsyncStorage.getItem('googleLoginInfo');
      if (googleLoginInfo) {
        const googleLoginData = JSON.parse(googleLoginInfo);
        navigation.navigate(NavigationStringPath.TABSCREENS, {
          screen: NavigationStringPath.HOMESCREEN,
          params: {userGoogleInfo: googleLoginData},
        });
      }
    } catch (error) {
      Alert.alert('Error', 'Error checking Google login');
    }
  };

  const checkSavedCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedEmail && savedPassword) {
        dispatch(setEmail(savedEmail));
        dispatch(setPassword(savedPassword));

        navigation.navigate(NavigationStringPath.TABSCREENS, {
          screen: NavigationStringPath.HOMESCREEN,
        });
      }
    } catch (error) {
      Alert.alert('Error', 'Error checking saved credentials');
    }
  };

  const FirebaseLogin = async () => {
    try {
      const userLoginCredential = await signInWithEmailAndPassword(
        auth,
        reduxAuth.email,
        reduxAuth.password,
      );

      const authToken = userLoginCredential.user.getIdToken();

      await AsyncStorage.setItem('email', reduxAuth.email);
      await AsyncStorage.setItem('password', reduxAuth.password);
      await AsyncStorage.setItem('token', JSON.stringify({value: authToken}));

      await AsyncStorage.removeItem('googleLoginInfo');

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.SETTINGSCREEN,
        params: {
          userEmail: userLoginCredential.user.email,
        },
      });

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.HOMESCREEN,
        params: {name: userLoginCredential.user.displayName},
      });

      // console.log('Email:', userLoginCredential.user.email);
    } catch (error) {
      Alert.alert('Error', 'Please add Login Details.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userGoogleInfo = await GoogleSignin.signIn();

      await AsyncStorage.setItem(
        'googleLoginInfo',
        JSON.stringify(userGoogleInfo),
      );

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.SETTINGSCREEN,
        params: {
          userGoogleEmail: userGoogleInfo.user.email,
          userGoogleName: userGoogleInfo.user.name,
        },
      });

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.PROFILESCREEN,
        params: {
          googlePhoto: userGoogleInfo.user.photo,
        },
      });
      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.HOMESCREEN,
        params: {
          userGoogleInfo: userGoogleInfo,
        },
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the sign-in flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Another sign-in operation is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.error('Error in Google sign-in:', error);
      }
    }
  };

  return (
    <>
      <KeyboardAwareScrollView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{flex: 1}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: darkBackgroundColor,
          }}>
          <SafeAreaView style={styles.container}>
            <View style={{marginHorizontal: moderateScale(16)}}>
              <View style={styles.imageView}>
                <LoginSvg
                  width={moderateScale(310)}
                  height={moderateScale(210)}
                />
              </View>
              <View style={styles.welcomeTextView}>
                <CustomWelcomeText
                  text={'Log in'}
                  inlineStyle={{color: darkmodeColor}}
                />

                <CustomDescriptionText
                  text={'Login with social network '}
                  marginTop={moderateScale(8)}
                  lineHeight={21}
                  inlineStyle={{color: darkmodeColor}}
                />

                <View style={styles.iconView}>
                  <CustomImage
                    source={ImagePath.GOOGLEIMG}
                    resizeMode="cover"
                    onPress={() => {
                      handleGoogleSignIn();
                    }}
                  />
                </View>
              </View>
              <View style={styles.textinputView}>
                <View style={styles.textinputTop}>
                  <CustomInput
                    placeholder="Email"
                    onChangeText={text => dispatch(setEmail(text))}
                    inputStyle={{
                      width: '100%',
                    }}
                    value={reduxAuth.email}
                    placeholderTextColor={darkmodeColor}
                  />
                </View>

                <CustomErrorMessage text={emailError} style={{color: 'red'}} />
                <View style={styles.textinputPassword}>
                  <CustomInput
                    inputStyle={{
                      width: '90%',
                      color: darkmodeColor,
                    }}
                    secureTextEntry={secureTextEntry}
                    placeholder="Password"
                    onChangeText={text => dispatch(setPassword(text))}
                    value={reduxAuth.password}
                    rightIcon={
                      secureTextEntry ? 'eye-off-outline' : 'eye-outline'
                    }
                    onPressRight={() => setSecureTextEntry(!secureTextEntry)}
                    placeholderTextColor={darkmodeColor}
                  />
                </View>
                <CustomErrorMessage
                  text={passwordError}
                  style={{color: 'red'}}
                />

                <View style={styles.forgotPasswordView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(NavigationStringPath.FORGOTSCREEN);
                    }}>
                    <Text
                      style={[
                        styles.forgotPasswordTextStyle,
                        {color: darkmodeColor},
                      ]}>
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: moderateScale(0)}}>
                  <CustomButton
                    text={'Log in'}
                    onPress={() => {
                      validation();
                    }}
                    style={{
                      backgroundColor: darkBackgroundColor,
                    }}
                  />
                </View>
              </View>
              <View style={styles.SignUpView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(NavigationStringPath.SIGNUPSCREEN);
                  }}>
                  <Text
                    style={[styles.signUpTextStyle, {color: darkmodeColor}]}>
                    Sign up
                  </Text>
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
