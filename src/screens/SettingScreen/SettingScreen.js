import {SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import NavigationStringPath from '../../constants/NavigationStringPath';
import Color from '../../constants/Color';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {Bell, Off, On, SettingSvg} from '../../constants/SvgPath';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSettingComponent from '../../components/CustomSettingComponent';
import CustomWelcomeText from '../../components/CustomWelcomeText';

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
              navigation.navigate(NavigationStringPath.SIGNUPSCREEN);
            }}
            text={'Settings'}
          />

          <View
            style={{
              alignItems: 'center',
              marginTop: moderateScale(24),
              marginBottom: moderateScale(16),
            }}>
            <SettingSvg />
          </View>
          <CustomSettingComponent
            text={'Notifications'}
            icon={<Bell />}
            onToggle={handleNotificationToggle}
            isOn={notificationToggle}
            icon2={notificationToggle ? <On /> : <Off />}
          />
          <View
            style={{alignItems: 'baseline', height: moderateVerticalScale(21)}}>
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
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingScreen;
