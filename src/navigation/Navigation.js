import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStringPath from '../constants/NavigationStringPath';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import TabScreen from '../screens/TabScreens/TabScreen';
import ResultsScreen from '../screens/ResultsScreen/ResultsScreen';
import ForgotScreen from '../screens/ForgotScreen/ForgotScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import YourCourseScreen from '../screens/YourCourseScreen/YourCourseScreen';
import CourseSavedScreen from '../screens/CourseSavedScreen/CourseSavedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const navigation = useNavigation();

  const [initialRoute, setInitialRoute] = useState(
    NavigationStringPath.LOGINSCREEN,
  );

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // console.log('Checking login status...');
        const token = await AsyncStorage.getItem('token');

        if (token) {
          // console.log('Token found. Redirecting to TabScreen.');
          setInitialRoute(NavigationStringPath.TABSCREENS);
        } else {
          // console.log('No token found. Redirecting to LoginScreen.');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationStringPath.LOGINSCREEN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.SIGNUPSCREEN}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.FORGOTSCREEN}
        component={ForgotScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.RESULTSCREEN}
        component={ResultsScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.PRODUCTSCREEN}
        component={ProductScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.YOUR_COURSESSCREEN}
        component={YourCourseScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.COURSE_SAVED_SCREEN}
        component={CourseSavedScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.TABSCREENS}
        component={TabScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
