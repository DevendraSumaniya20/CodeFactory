import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import NavigationStringPath from '../../constants/NavigationStringPath';

import CustomIcon from '../../components/CustomIcon';
import CustomTopics from '../../components/CustomTopics';
import CustomTheme from '../../constants/CustomTheme';

const SelectedCourseScreen = ({route}) => {
  const navigation = useNavigation();

  const [selectedCourse, setSelectedCourse] = useState(
    route.params.selectedCourse,
  );

  // console.log('Selected CourseScreen data', selectedCourse);

  const [progress, setProgress] = useState(0.5);

  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();

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
        style={{
          flex: 1,
          backgroundColor: darkBackgroundColor,
        }}
        contentContainerStyle={{
          paddingBottom: moderateVerticalScale(100),
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View
          style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
          <SafeAreaView
            style={[
              styles.subContainer,
              {backgroundColor: darkBackgroundColor},
            ]}>
            <View style={styles.marginContainer}>
              <CustomHeader
                iconName={'chevron-back'}
                onPress={() => {
                  navigation.goBack();
                }}
                text={selectedCourse?.type}
              />

              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: moderateVerticalScale(8),
                  }}>
                  <View
                    style={[{alignItems: 'center', justifyContent: 'center'}]}>
                    <Image
                      resizeMode="cover"
                      source={selectedCourse.image}
                      style={{
                        width: moderateScale(350),
                        height: moderateVerticalScale(280),
                        borderRadius: moderateScale(8),
                      }}
                    />

                    <View
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: [
                          {translateX: -scale(35)},
                          {translateY: -scale(35)},
                        ],
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          Alert.alert('You can continue Course');
                        }}>
                        <CustomIcon
                          name={'caret-forward-circle-outline'}
                          size={scale(70)}
                          color={Color.LIGHTGREEEN}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{marginTop: moderateVerticalScale(8)}}>
                    <Text
                      style={{
                        fontSize: scale(24),
                        fontWeight: '600',
                        fontFamily: 'Rubik-Regular',
                        color: darkmodeColor,
                        marginVertical: moderateVerticalScale(8),
                      }}>
                      {selectedCourse.type}
                    </Text>
                    <Text
                      style={{
                        fontSize: scale(16),
                        fontWeight: '400',
                        fontFamily: 'Rubik-Regular',
                        color: darkmodeColor,
                      }}>
                      {selectedCourse.aboutCourseDetails}
                    </Text>
                  </View>

                  <View style={{paddingBottom: moderateScale(8)}}>
                    {Object.entries(selectedCourse.topics).map(
                      ([topicKey, topicData]) => (
                        <CustomTopics
                          key={topicKey}
                          topicImage={selectedCourse.image}
                          topicName={topicData.name}
                          questions={topicData.questions}
                          onPress={() => {
                            navigation.navigate(
                              NavigationStringPath.COURSE_LESSONSCREEN,
                              {
                                selectedCourse,
                                topicName: topicData.name,
                                totalTopics: Object.keys(selectedCourse.topics)
                                  .length,
                                questions: topicData.questions,
                              },
                            );
                          }}
                        />
                      ),
                    )}
                  </View>
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
