import AsyncStorage from '@react-native-async-storage/async-storage';
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
import {GoogleSvg, LoginSvg} from '../../constants/SvgPath';
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

const LoginScreen = ({}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const reduxAuth = useSelector(state => state.auth);
  console.log(reduxAuth, '........');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GoogleClientId,
    });
  }, []);

  useEffect(() => {
    // Load saved credentials when component mounts
    getCredentials();
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

  useEffect(() => {
    checkSavedCredentials();
  }, []);

  const checkSavedCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedEmail && savedPassword) {
        dispatch(setEmail(savedEmail));
        dispatch(setPassword(savedPassword));
      }
    } catch (error) {
      console.error('Error checking saved credentials:', error);
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

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.HOMESCREEN,
        params: {name: userLoginCredential.user.displayName},
      });
    } catch (error) {
      Alert.alert('Please add Login Details.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userGoggleInfo = await GoogleSignin.signIn();

      navigation.navigate(NavigationStringPath.TABSCREENS, {
        screen: NavigationStringPath.HOMESCREEN,
        params: {userGoggleInfo: userGoggleInfo},
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

  const getCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedEmail !== null && savedPassword !== null) {
        dispatch(setEmail(savedEmail));
        dispatch(setPassword(savedPassword));
      }
    } catch (error) {
      console.error('Error getting credentials:', error);
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
                    inputStyle={{width: '100%'}}
                    value={reduxAuth.email}
                  />
                </View>

                <CustomErrorMessage text={emailError} />
                <View style={styles.textinputPassword}>
                  <CustomInput
                    inputStyle={{width: '90%'}}
                    secureTextEntry={secureTextEntry}
                    placeholder="Password"
                    onChangeText={text => dispatch(setPassword(text))}
                    value={reduxAuth.password}
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
