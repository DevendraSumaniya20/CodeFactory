import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStringPath from '../constants/NavigationStringPath';
import IntroScreen1 from '../screens/IntroScreen1/IntroScreen1';
import IntroScreen2 from '../screens/IntroScreen2/IntroScreen2';
import IntroScreen3 from '../screens/IntroScreen3/IntroScreen3';
import LoginScreen from '../screens/LoingScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={NavigationStringPath.INTROSCREEN1}
          component={IntroScreen1}
        />
        <Stack.Screen
          name={NavigationStringPath.INTROSCREEN2}
          component={IntroScreen2}
        />
        <Stack.Screen
          name={NavigationStringPath.INTROSCREEN3}
          component={IntroScreen3}
        />
        <Stack.Screen
          name={NavigationStringPath.LOGINSCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={NavigationStringPath.SIGNUPSCREEN}
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
