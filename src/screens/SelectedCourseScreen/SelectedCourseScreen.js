import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import {CoolKid, CourseSavedSvg, NotSavedSvg} from '../../constants/SvgPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import NavigationStringPath from '../../constants/NavigationStringPath';

import CustomIcon from '../../components/CustomIcon';
import CustomTopics from '../../components/CustomTopics';

const SelectedCourseScreen = ({route}) => {
  const navigation = useNavigation();

  const [selectedCourse, setSelectedCourse] = useState(
    route.params.selectedCourse,
  );

  // console.log('Selected COurseScreen data', selectedCourse);

  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 0.05;
        return newProgress >= 1 ? 1 : newProgress;
      });
    }, 1000);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingBottom: moderateVerticalScale(600),
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SafeAreaView style={styles.subContainer}>
            <View style={styles.marginContainer}>
              <CustomHeader
                iconName={'chevron-back'}
                size={24}
                color={Color.BLACK}
                onPress={() => {
                  navigation.goBack();
                }}
                text={selectedCourse?.type}
              />

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: moderateScale(343),
                    height: moderateVerticalScale(334),
                    borderRadius: moderateScale(8),
                    borderColor: Color.BLACK,
                    borderWidth: 1,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={selectedCourse.image}
                    style={{
                      width: moderateScale(343),
                      height: moderateVerticalScale(190),
                      borderRadius: moderateScale(8),
                      resizeMode: 'contain',
                    }}
                  />
                  <View
                    style={{
                      alignItems: 'flex-end',
                      marginRight: moderateScale(8),
                    }}>
                    <CustomIcon
                      name={'caret-forward-circle-outline'}
                      size={scale(48)}
                      color={Color.LIGHTGREEEN}
                    />

                    <View
                      style={{
                        marginTop: moderateVerticalScale(90),
                      }}>
                      <Text
                        style={{
                          fontSize: scale(24),
                          fontWeight: '600',
                          fontFamily: 'Rubik-Regular',
                          color: Color.BLACK,
                          marginVertical: moderateVerticalScale(8),
                        }}>
                        {selectedCourse.type}
                      </Text>
                      <Text
                        style={{
                          fontSize: scale(16),
                          fontWeight: '400',
                          fontFamily: 'Rubik-Regular',
                          color: Color.BLACK,
                        }}>
                        {selectedCourse.aboutCourseDetails}
                      </Text>
                    </View>
                  </View>

                  <CustomTopics
                    topicImage={selectedCourse.image}
                    topicName={selectedCourse.topics.topic1}
                    onPress={() => {
                      navigation.navigate(
                        NavigationStringPath.COURSE_LESSONSCREEN,
                        {
                          selectedCourse,
                          topicName: selectedCourse.topics.topic1,
                        },
                      );
                    }}
                  />
                  <CustomTopics
                    topicImage={selectedCourse.image}
                    topicName={selectedCourse.topics.topic2}
                    onPress={() => {
                      navigation.navigate(
                        NavigationStringPath.COURSE_LESSONSCREEN,
                        {
                          selectedCourse,
                          topicName: selectedCourse.topics.topic2,
                        },
                      );
                    }}
                  />
                  <CustomTopics
                    topicImage={selectedCourse.image}
                    topicName={selectedCourse.topics.topic3}
                    onPress={() => {
                      navigation.navigate(
                        NavigationStringPath.COURSE_LESSONSCREEN,
                        {
                          selectedCourse,
                          topicName: selectedCourse.topics.topic3,
                        },
                      );
                    }}
                  />
                  <CustomTopics
                    topicImage={selectedCourse.image}
                    topicName={selectedCourse.topics.topic4}
                    onPress={() => {
                      navigation.navigate(
                        NavigationStringPath.COURSE_LESSONSCREEN,
                        {
                          selectedCourse,
                          topicName: selectedCourse.topics.topic4,
                        },
                      );
                    }}
                  />
                </View>
              </View>

              {selectedCourse ? null : (
                <>
                  <View style={styles.imageView}>
                    <CourseSavedSvg />
                  </View>
                  <View style={styles.welcomeTextView}>
                    <CustomWelcomeText
                      text={' Course not Added'}
                      fontFamily="Rubik-Regular"
                      fontSize={scale(24)}
                      letterSpacing={-0.5}
                      lineHeight={32}
                      color={Color.BLACK}
                    />
                  </View>
                  <View style={styles.descriptionTextView}>
                    <CustomDescriptionText
                      fontsize={scale(14)}
                      lineHeight={21}
                      color={Color.GRAY}
                      fontFamily="Rubik-Regular"
                      fontWeight="400"
                      text={'Try to Add the course  '}
                    />
                    <CustomDescriptionText
                      fontsize={scale(14)}
                      lineHeight={21}
                      color={Color.GRAY}
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
          </SafeAreaView>
        </View>
      </ScrollView>
    </>
  );
};

export default SelectedCourseScreen;
