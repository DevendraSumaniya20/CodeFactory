import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Color from '../../constants/Color';
import NavigationStringPath from '../../constants/NavigationStringPath';
import HomeScreen from '../HomeScreen/HomeScreen';
import SettingScreen from '../SettingScreen/SettingScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import CustomTheme from '../../constants/CustomTheme';

const Tab = createBottomTabNavigator();

const TabScreen = ({userGoogleInfo}) => {
  const {darkmodeColor, darkBackgroundColor, darkBorderColor} = CustomTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: moderateVerticalScale(50),
          paddingVertical: moderateScale(6),
          backgroundColor: darkBackgroundColor,
          borderTopLeftRadius: moderateScale(10),
          borderTopRightRadius: moderateScale(10),
        },
        tabBarLabelStyle: {
          marginBottom: moderateScale(5),
          fontSize: scale(10),
          color: darkmodeColor,
        },
        tabBarActiveTintColor: Color.THEMECOLOR,
      }}>
      <Tab.Screen
        name={NavigationStringPath.HOMESCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="book-bookmark" color={color} size={24} />
          ),
          tabBarLabel: 'Courses',
        }}
      />
      <Tab.Screen
        name={NavigationStringPath.PROFILESCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={24} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name={NavigationStringPath.SETTINGSCREEN}
        component={SettingScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="settings" color={color} size={24} />
          ),
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
