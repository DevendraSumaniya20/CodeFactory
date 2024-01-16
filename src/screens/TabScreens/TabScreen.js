import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationStringPath from '../../constants/NavigationStringPath';
import HomeScreen from '../HomeScreen/HomeScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import SettingScreen from '../SettingScreen/SettingScreen';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={NavigationStringPath.HOMESCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        name={NavigationStringPath.PROFILESCREEN}
        component={ProfileScreen}
      />
      <Tab.Screen
        name={NavigationStringPath.SETTINGSCREEN}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
