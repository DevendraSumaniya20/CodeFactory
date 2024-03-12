import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';
import Color from '../../constants/Color';
import CustomHeader from '../../components/CustomHeader';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDetailsComponent from '../../components/CustomDetailsComponent';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSettingComponent from '../../components/CustomSettingComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Bell,
  Email,
  Lock,
  Off,
  On,
  Person,
  RightArrow,
  SettingSvg,
} from '../../constants/SvgPath';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {auth} from '../../config/FirebaseAuth';
import {useDispatch} from 'react-redux';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {
  clearCredentials,
  setEmail,
  setPassword,
} from '../../redux/Slices/authSlice';

const SettingScreen = ({route}) => {
  const navigation = useNavigation();
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');
  const [userEmailState, setUserEmailState] = useState('');

  const {userEmail, userGoogleEmail, userGoogleName} = route?.params ?? {};

  const dispatch = useDispatch();

  useEffect(() => {
    getUserInfo();
    getLastNotificationToggleStatus();
  }, []);

  useEffect(() => {
    setUserInformation();
  }, [userEmail, userGoogleEmail, userGoogleName]);

  const getUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      const storedName = await AsyncStorage.getItem('name');
      const storedEmail = await AsyncStorage.getItem('email');

      if (userInfo) {
        const {displayName, email} = JSON.parse(userInfo);
        setUserDisplayName(displayName);
        setUserEmailState(email);
      }
    } catch (error) {
      console.error('Error retrieving user info:', error);
    }
  };

  const setUserInformation = () => {
    let nameToShow = userGoogleName || '';
    const emailToShow = userGoogleEmail || userEmail;

    if (!nameToShow && emailToShow) {
      const atIndex = emailToShow.indexOf('@');
      if (atIndex !== -1) {
        nameToShow = emailToShow.substring(0, atIndex);
      }
    }

    setUserDisplayName(nameToShow);
    setUserEmailState(emailToShow);
  };

  const getLastNotificationToggleStatus = async () => {
    try {
      const lastToggleStatus = await AsyncStorage.getItem('notificationToggle');
      if (lastToggleStatus !== null) {
        setNotificationToggle(JSON.parse(lastToggleStatus));
      }
    } catch (error) {
      console.error('Error retrieving last notification toggle status:', error);
    }
  };

  const handleLogoutButtonClick = async () => {
    Alert.alert('Confirm Logout', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            const isSignedIn = await GoogleSignin.isSignedIn();
            if (isSignedIn) {
              await GoogleSignin.revokeAccess();
              await GoogleSignin.signOut();
            }

            await auth.signOut();
            await AsyncStorage.clear();
            dispatch(clearCredentials());
            dispatch(setEmail(''));
            dispatch(setPassword(''));

            navigation.push(NavigationStringPath.LOGINSCREEN);
            // navigation.navigate(NavigationStringPath.LOGINSCREEN);
          } catch (error) {
            console.error('Error during logout:', error);
          }
        },
      },
    ]);
  };

  const handleNotificationToggle = () => {
    const newNotificationToggle = !notificationToggle;
    setNotificationToggle(newNotificationToggle);

    AsyncStorage.setItem(
      'notificationToggle',
      JSON.stringify(newNotificationToggle),
    )
      .then(() => {
        console.log('Notification toggle status saved:', newNotificationToggle);
        if (!newNotificationToggle) {
          Alert.alert(
            'Notifications Off',
            'You have turned off notifications.',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          );

          AsyncStorage.setItem('notificationAlert', 'Notifications Off').catch(
            error => {
              console.error('Error saving notification alert:', error);
            },
          );
        }
      })
      .catch(error => {
        console.error('Error saving notification toggle status:', error);
      });
  };

  const saveUserInfo = async () => {
    try {
      const userInfo = {
        displayName: userDisplayName,
        email: userEmailState,
      };
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    } catch (error) {
      console.error('Error saving user info:', error);
    }
  };

  useEffect(() => {
    saveUserInfo();
  }, [userDisplayName, userEmailState]);

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={{
        paddingBottom: moderateVerticalScale(150),
        backgroundColor: '#fff',
      }}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SafeAreaView style={styles.subContainer}>
          <View style={styles.marginContainer}>
            <CustomHeader
              iconName={'chevron-back'}
              color={Color.BLACK}
              onPress={() => {
                navigation.goBack();
              }}
              text={'Settings'}
            />
            <View
              style={{
                alignItems: 'center',
                marginTop: moderateScale(24),
              }}>
              <SettingSvg />
            </View>
            <ScrollView>
              <CustomSettingComponent
                text={'Notifications'}
                icon={<Bell />}
                onToggle={handleNotificationToggle}
                isOn={notificationToggle}
                icon2={notificationToggle ? <On /> : <Off />}
                inlineTextStyle={{
                  color: notificationToggle ? '#000' : '#AAA',
                }}
              />
              <View
                style={{
                  alignItems: 'baseline',
                  height: moderateVerticalScale(21),
                  marginBottom: moderateVerticalScale(16),
                }}>
                <CustomWelcomeText
                  text={'Account information'}
                  letterSpacing={-0.5}
                  lineHeight={26}
                  fontFamily={'Rubik-Regular'}
                  fontWeight={'500'}
                  color={Color.BLACK}
                  fontSize={scale(20)}
                />
              </View>
              <View>
                <CustomDetailsComponent
                  icon1={<Person />}
                  text1={'Name'}
                  text2={userDisplayName}
                  icon2={<RightArrow />}
                />
                <CustomDetailsComponent
                  icon1={<Email />}
                  text1={'Email'}
                  text2={userEmailState}
                  icon2={<RightArrow />}
                />
                <CustomDetailsComponent
                  icon1={<Lock />}
                  text1={'Password'}
                  text2={'Click here to change Password'}
                  icon2={<RightArrow />}
                />
              </View>

              <View style={styles.logoutView}>
                <TouchableOpacity
                  onPress={() => {
                    handleLogoutButtonClick();
                  }}>
                  <Text style={styles.logoutTextStyle}>Log out</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SettingScreen;
