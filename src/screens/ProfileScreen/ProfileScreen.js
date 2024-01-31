import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './Styles'; // Importing the external style sheet
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {ProfileSvg} from '../../constants/SvgPath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import CustomBorderComponent from '../../components/CustomBorderComponent';

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
              navigation.goBack();
            }}
            text={'Profile'}
          />

          <View style={styles.profileImageContainer}>
            <View style={styles.profileImageBorder}>
              <ProfileSvg />
            </View>
          </View>

          <View style={styles.menuContainer}>
            <View style={styles.menuItem}>
              <CustomBorderComponent
                text={'Your Courses'}
                onPress={() => {
                  navigation.navigate(NavigationStringPath.YOUR_COURSESSCREEN);
                }}
              />
            </View>

            <View style={styles.menuItem}>
              <CustomBorderComponent
                text={'Saved'}
                onPress={() => {
                  navigation.navigate(NavigationStringPath.COURSE_SAVED_SCREEN);
                }}
              />
            </View>

            <View style={styles.menuItem}>
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
