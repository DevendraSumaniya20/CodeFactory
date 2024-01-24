import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import NavigationStringPath from '../../constants/NavigationStringPath';
import Color from '../../constants/Color';
import CustomHeader from '../../components/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {Bell, SettingSvg} from '../../constants/SvgPath';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomSettingComponent from '../../components/CustomSettingComponent';
import CustomBorderComponent from '../../components/CustomBorderComponent';
import CustomIcon from '../../components/CustomIcon';
import {moderateScaleVertical} from '../../constants/responsiveSize';

const SettingScreen = () => {
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: moderateScale(16),
              paddingHorizontal: moderateScale(16),
              paddingVertical: moderateScaleVertical(8),
            }}>
            <TouchableOpacity onPress={() => {}} style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: Color.BLUE,
                  borderRadius: moderateScale(56),
                  alignItems: 'center',
                  width: moderateScale(32),
                  height: moderateScaleVertical(32),
                  justifyContent: 'center',
                }}>
                <CustomIcon
                  name={'bell-outline'}
                  type={'MaterialCommunityIcons'}
                  size={14}
                  color="#fff"
                />
              </View>
              <Text
                style={{
                  marginRight: moderateScale(12),
                  marginLeft: moderateScale(8),
                  fontFamily: 'Rubik-Regular',
                  fontSize: scale(20),
                  fontWeight: '500',
                  lineHeight: 26,
                  letterSpacing: -0.5,
                  textAlign: 'center',
                }}>
                Notification
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingScreen;
