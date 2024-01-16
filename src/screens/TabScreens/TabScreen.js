import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {moderateScale, scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import NavigationStringPath from '../../constants/NavigationStringPath';
import HomeScreen from '../HomeScreen/HomeScreen';
import SettingScreen from '../SettingScreen/SettingScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Color.RED,
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: moderateScale(20),
          borderTopRightRadius: moderateScale(20),
          height: moderateScale(56),
        },
        tabBarLabelStyle: {
          marginBottom: moderateScale(5),
          fontSize: scale(10),
        },
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
