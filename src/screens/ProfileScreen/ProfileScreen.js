import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {ProfileSvg} from '../../constants/SvgPath';
import CustomBorderComponent from '../../components/CustomBorderComponent';
import {auth} from '../../config/FirebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import ImagePicker from 'react-native-image-crop-picker';
import ImagePath from '../../constants/ImagePath';

const ProfileScreen = () => {
  const [image, setImage] = useState(ImagePath.DATAIMG3);

  const navigation = useNavigation();
  const route = useRoute();

  const {userGoogleInfo} = route.params || {};

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

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
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
              <TouchableOpacity
                onPress={() => {
                  takePhotoFromCamera();
                }}>
                <Image source={image} />
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
