import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import {CourseSavedSvg} from '../../constants/SvgPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import {getData, removeData} from '../../utils/AsyncStorage';
import NavigationStringPath from '../../constants/NavigationStringPath';

import CustomIcon from '../../components/CustomIcon';
import CustomTheme from '../../constants/CustomTheme';

const YourCourseScreen = ({route}) => {
  const navigation = useNavigation();

  // const {item} = route.params || {};

  const [storedCourses, setStoredCourses] = useState([]);
  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();

  useEffect(() => {
    const retrieveStoredCourses = async () => {
      const storedData = await getData('purchaseCourse');
      if (storedData) {
        setStoredCourses(JSON.parse(storedData));
      }
    };
    retrieveStoredCourses();
  }, []);

  const handleDelete = async course => {
    Alert.alert(
      'Delete Course',
      `Are you sure you want to delete ${course.type}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const updatedCourses = storedCourses.filter(
              storedCourse => storedCourse.id !== course.id,
            );
            setStoredCourses(updatedCourses);

            await removeData('purchaseCourse');
            await AsyncStorage.setItem(
              'purchaseCourse',
              JSON.stringify(updatedCourses),
            );
          },
        },
      ],
    );
  };

  const renderItem = ({item}) => {
    const handleIconPress = () => {
      navigation.navigate(NavigationStringPath.SELECTED_COURSE_SCREEN, {
        selectedCourse: item,
      });
    };

    const handleDeleteButtonPress = () => {
      handleDelete(item);
    };

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate(NavigationStringPath.SELECTED_COURSE_SCREEN, {
            selectedCourse: item,
          });
        }}>
        <View
          style={[
            styles.renderMainView,
            {
              backgroundColor: darkBackgroundColor,
              borderColor: darkBorderColor,
            },
          ]}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: moderateVerticalScale(16),
            }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={[
                styles.renderItemImage,
                {
                  borderRadius: moderateScale(20),
                },
              ]}
            />
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={handleIconPress}>
              <CustomIcon
                name={'caret-forward-circle-outline'}
                size={scale(60)}
                color={darkmodeColor}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.renderSecondView}>
            <Text style={styles.renderDurationText}>{item.duration}</Text>
            <Text style={[styles.renderTypeText, {color: darkmodeColor}]}>
              {item.type}
            </Text>
            <Text
              style={[styles.renderOtherDetailsText, {color: darkmodeColor}]}>
              {item.otherDetails}
            </Text>
          </View>
          <CustomButton
            onPress={handleDeleteButtonPress}
            inlineStyle={{width: moderateScale(300)}}
            text={'Delete'}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
      <SafeAreaView
        style={[styles.subContainer, {backgroundColor: darkBackgroundColor}]}>
        <View style={styles.marginContainer}>
          <CustomHeader
            iconName={'chevron-back'}
            onPress={() => {
              navigation.goBack();
            }}
            text={'Your Courses'}
          />

          <View style={[{backgroundColor: darkBackgroundColor}]}>
            {storedCourses.length > 0 ? (
              <FlatList
                data={storedCourses}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: moderateScale(350),
                }}
              />
            ) : (
              <>
                <View
                  style={[
                    styles.imageView,
                    {backgroundColor: darkBackgroundColor},
                  ]}>
                  <CourseSavedSvg />
                </View>
                <View style={styles.welcomeTextView}>
                  <CustomWelcomeText
                    text={' Course not Added'}
                    fontFamily="Rubik-Regular"
                    fontSize={scale(24)}
                    letterSpacing={-0.5}
                    lineHeight={32}
                  />
                </View>
                <View style={styles.descriptionTextView}>
                  <CustomDescriptionText
                    fontsize={scale(14)}
                    lineHeight={21}
                    fontFamily="Rubik-Regular"
                    fontWeight="400"
                    text={'Try to Add the course  '}
                  />
                  <CustomDescriptionText
                    fontsize={scale(14)}
                    lineHeight={21}
                    fontFamily="Rubik-Regular"
                    fontWeight="400"
                    text={'after you will see your Courses '}
                  />
                </View>

                <View style={styles.continueToubleView}>
                  <CustomButton
                    text={'Check Courses'}
                    onPress={() => {
                      navigation.navigate(NavigationStringPath.HOMESCREEN);
                    }}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default YourCourseScreen;
