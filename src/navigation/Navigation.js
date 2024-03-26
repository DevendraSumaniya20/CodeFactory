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
import SelectedCourseScreen from '../screens/SelectedCourseScreen/SelectedCourseScreen';
import CourseLessonScreen from '../screens/CourseLessonScreen/CourseLessonScreen';
import CourseTestScreen from '../screens/CourseTestScreen/CourseTestScreen';
import CustomTheme from '../constants/CustomTheme';
import CourseResultScreen from '../screens/CourseResultScreen/CourseResultScreen';
import {ActivityIndicator, View} from 'react-native';
import EditScreen from '../screens/EditScreen/EditScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {darkmodeColor, darkBackgroundColor} = CustomTheme();
  const [initialRoute, setInitialRoute] = useState(
    NavigationStringPath.LOGINSCREEN,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (token) {
          setInitialRoute(NavigationStringPath.TABSCREENS);
        } else {
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

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
        name={NavigationStringPath.SELECTED_COURSE_SCREEN}
        component={SelectedCourseScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.COURSE_LESSONSCREEN}
        component={CourseLessonScreen}
      />

      <Stack.Screen
        name={NavigationStringPath.COURSE_TESTSCREEN}
        component={CourseTestScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.COURSE_RESULTSCREEN}
        component={CourseResultScreen}
      />
      <Stack.Screen
        name={NavigationStringPath.EDITSCREEN}
        component={EditScreen}
      />

      <Stack.Screen
        name={NavigationStringPath.TABSCREENS}
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: darkBackgroundColor},
        }}>
        {props => <TabScreen {...props} darkmodeColor={darkmodeColor} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;
