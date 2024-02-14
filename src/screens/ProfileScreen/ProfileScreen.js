import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
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
import {useDispatch, useSelector} from 'react-redux';
import {cameraPermissionGiven} from '../../redux/Slices/cameraPermissionSlice';
import ImagePicker from 'react-native-image-crop-picker';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomIcon from '../../components/CustomIcon';
import CustomButton from '../../components/CustomButton';
import CustomImage from '../../components/CustomImage';

const ProfileScreen = () => {
  const [image, setImage] = useState(ImagePath.STUDENT);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const cameraPermission = useSelector(state => state.cameraPermission);

  const requestForCameraUse = () => {
    dispatch(cameraPermissionGiven());
  };

  useEffect(() => {
    if (!cameraPermission) {
      requestForCameraUse();
    }
  }, [cameraPermission]);

  useEffect(() => {
    loadGooglePhoto();
  }, []);

  const takePhotoFromGallery = async () => {
    try {
      const selectedImage = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        waitAnimationEnd: true,
        useFrontCamera: true,
      });
      setImage({uri: selectedImage.path});

      await AsyncStorage.setItem('selectedImage', selectedImage.path);

      setModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const takePhotoFromCamera = async () => {
    try {
      const selectedImage = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      setImage({uri: selectedImage.path});

      await AsyncStorage.setItem('selectedImage', selectedImage.path);

      setModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

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

      const selectedImage = await AsyncStorage.getItem('selectedImage');
      if (selectedImage) {
        setImage({uri: selectedImage});
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
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
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
                  setModalVisible(true);
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              alignItems: 'center',
              flexDirection: 'column-reverse',
              marginBottom: moderateVerticalScale(8),
            }}>
            <View
              style={{
                backgroundColor: Color.BLUE,
                paddingHorizontal: moderateScale(26),
                paddingVertical: moderateScale(20),
                borderRadius: moderateScale(20),
                width: moderateScale(350),
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  marginBottom: moderateVerticalScale(12),
                }}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <CustomIcon
                  name={'close'}
                  size={40}
                  type="Ionicons"
                  color={Color.WHITE}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: moderateScale(16),
                  borderColor: Color.WHITE,
                  marginBottom: moderateVerticalScale(8),
                }}
                onPress={() => {
                  takePhotoFromCamera();
                }}>
                <CustomImage source={ImagePath.CAMERA} resizeMode={'contain'} />

                <Text style={{fontSize: scale(16), color: Color.WHITE}}>
                  Take a photo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: moderateScale(16),
                  borderColor: Color.WHITE,
                }}
                onPress={() => {
                  takePhotoFromGallery();
                }}>
                <CustomImage
                  source={ImagePath.GALLERY}
                  resizeMode={'contain'}
                />

                <Text style={{fontSize: scale(16), color: Color.WHITE}}>
                  Choose From Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
