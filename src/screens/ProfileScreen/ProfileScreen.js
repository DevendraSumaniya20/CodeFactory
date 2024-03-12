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
import AsyncStorage from '@react-native-async-storage/async-storage';
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
                text={'Result'}
                onPress={() => {
                  Alert.alert('Your result ');
                }}
              />
            </View>
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              backgroundColor: Color.Black,
              flex: 1,
              alignItems: 'center',
              flexDirection: 'column-reverse',
              marginBottom: moderateVerticalScale(8),
            }}>
            <View
              style={{
                backgroundColor: Color.WHITE,
                paddingHorizontal: moderateScale(26),
                paddingVertical: moderateScale(20),
                width: moderateScale(400),

                borderTopLeftRadius: moderateScale(40),
                borderTopRightRadius: moderateScale(40),
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
                  size={scale(20)}
                  type="Ionicons"
                  color={Color.BLACK}
                />
              </TouchableOpacity>

              <View
                style={{
                  paddingHorizontal: moderateScale(10),
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: moderateScale(16),
                    borderColor: Color.BLACK,
                    marginBottom: moderateVerticalScale(16),
                    gap: 10,
                  }}
                  onPress={() => {
                    takePhotoFromCamera();
                  }}>
                  <CustomImage
                    source={ImagePath.CAMERA}
                    resizeMode={'contain'}
                  />

                  <Text style={{fontSize: scale(16), color: Color.BLACK}}>
                    Take a photo
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: moderateScale(16),
                    borderColor: Color.BLACK,
                    marginBottom: moderateVerticalScale(12),
                    gap: 10,
                  }}
                  onPress={() => {
                    takePhotoFromGallery();
                  }}>
                  <CustomImage
                    source={ImagePath.GALLERY}
                    resizeMode={'contain'}
                  />

                  <Text style={{fontSize: scale(16), color: Color.BLACK}}>
                    Choose From Gallery
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
