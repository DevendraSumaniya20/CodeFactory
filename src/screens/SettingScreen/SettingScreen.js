import {SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import NavigationStringPath from '../../constants/NavigationStringPath';
import Color from '../../constants/Color';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
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
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSettingComponent from '../../components/CustomSettingComponent';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDetailsComponent from '../../components/CustomDetailsComponent';

const SettingScreen = () => {
  const [notificationToggle, setNotificationToggle] = useState(false);

  const handleNotificationToggle = () => {
    setNotificationToggle(!notificationToggle);
  };

  const navigation = useNavigation();

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
                text2={'Juana Antonieta'}
                icon2={<RightArrow />}
              />
              <CustomDetailsComponent
                icon1={<Email />}
                text1={'Email'}
                text2={'juanita123@gmail.com'}
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
