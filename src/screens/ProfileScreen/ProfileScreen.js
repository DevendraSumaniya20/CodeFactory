import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth} from '../../config/FirebaseAuth';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomBorderComponent from '../../components/CustomBorderComponent';
import ImagePath from '../../constants/ImagePath';

const ProfileScreen = () => {
  const [image, setImage] = useState(ImagePath.DATAIMG3);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    loadGooglePhoto();
  }, []);

  const loadGooglePhoto = async () => {
    try {
      const storedPhoto = await AsyncStorage.getItem('googlePhoto');
      if (storedPhoto) {
        setImage({uri: storedPhoto});
      } else {
        const googlePhoto = route.params?.googlePhoto;
        if (googlePhoto) {
          setImage({uri: googlePhoto});
          await AsyncStorage.setItem('googlePhoto', googlePhoto);
        }
      }
    } catch (error) {
      console.error('Error loading Google photo:', error);
    }
  };

  const handleLogoutButtonClick = async () => {
    Alert.alert('Confirm Logout', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            const isSignedIn = await GoogleSignin.isSignedIn();
            if (isSignedIn) {
              await GoogleSignin.revokeAccess();
              await GoogleSignin.signOut();
            }

            await auth.signOut();
            await AsyncStorage.clear();

            navigation.navigate(NavigationStringPath.LOGINSCREEN);
          } catch (error) {
            console.error('Error during logout:', error);
          }
        },
      },
    ]);
  };

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
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={image}
                  style={
                    image.uri ? styles.profileGoogleImage : styles.profileImage
                  }
                  resizeMode="contain"
                  resizeMethod="auto"
                />
              </TouchableOpacity>
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
                handleLogoutButtonClick();
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
