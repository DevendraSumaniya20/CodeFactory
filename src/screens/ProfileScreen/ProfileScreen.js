import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {ProfileSvg} from '../../constants/SvgPath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import CustomBorderComponent from '../../components/CustomBorderComponent';
import {moderateScaleVertical} from '../../constants/responsiveSize';

const ProfileScreen = () => {
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
            text={'Profile'}
          />

          <View
            style={{
              borderRadius: moderateScale(50),
              overflow: 'hidden',
              padding: moderateScale(16),
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: moderateVerticalScale(32),
            }}>
            <View
              style={{
                borderWidth: 4,
                borderColor: Color.BLUE,
                borderRadius: 100,
                overflow: 'hidden',
                width: moderateScale(140),
                height: moderateVerticalScale(140),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ProfileSvg
                width={moderateScale(156)}
                height={moderateVerticalScale(131)}
              />
            </View>
          </View>
          <View style={{marginTop: moderateScaleVertical(16)}}>
            <View style={{marginVertical: moderateScaleVertical(16)}}>
              <CustomBorderComponent
                text={'Your Courses'}
                onPress={() => {
                  Alert.alert('Warning');
                }}
              />
            </View>

            <View style={{marginVertical: moderateScaleVertical(16)}}>
              <CustomBorderComponent
                text={'Saved'}
                onPress={() => {
                  Alert.alert('Warning');
                }}
              />
            </View>
            <View style={{marginVertical: moderateScaleVertical(16)}}>
              <CustomBorderComponent
                text={'Payment'}
                onPress={() => {
                  Alert.alert('Warning');
                }}
              />
            </View>
          </View>
          <View style={styles.logoutView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NavigationStringPath.LOGINSCREEN);
              }}>
              <Text style={styles.logoutTextStyle}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
