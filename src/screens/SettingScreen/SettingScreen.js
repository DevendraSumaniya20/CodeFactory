import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';
import Color from '../../constants/Color';
import CustomHeader from '../../components/CustomHeader';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSettingComponent from '../../components/CustomSettingComponent';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDetailsComponent from '../../components/CustomDetailsComponent';
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

const SettingScreen = ({route}) => {
  const navigation = useNavigation();
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState('');
  const [userEmailState, setUserEmailState] = useState('');

  const {userEmail, userGoogleEmail, userGoogleName} = route?.params ?? {};

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
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.marginContainer}>
          <CustomHeader
            iconName={'chevron-back'}
            size={16}
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
                text2={'changed 2 weeks ago'}
                icon2={<RightArrow />}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingScreen;
