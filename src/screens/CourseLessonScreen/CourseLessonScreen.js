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
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

import CustomBorderComponent from '../../components/CustomBorderComponent';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomTheme from '../../constants/CustomTheme';

const CourseLessonScreen = ({route}) => {
  const navigation = useNavigation();

  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();

  const {selectedCourse, topicName, questions} = route.params || {};
  const [selectedComponent, setSelectedComponent] = useState('');

  return (
    <>
      <ScrollView
        style={{flex: 1, backgroundColor: darkBackgroundColor}}
        contentContainerStyle={{
          paddingBottom: moderateVerticalScale(400),
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View
          style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
          <SafeAreaView style={styles.subContainer}>
            <View style={styles.marginContainer}>
              <CustomHeader
                iconName={'chevron-back'}
                onPress={() => {
                  navigation.goBack();
                }}
                text={selectedCourse?.type}
              />

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: darkBorderColor,
                  marginBottom: moderateVerticalScale(8),
                }}>
                <Text
                  style={{
                    fontSize: scale(24),
                    fontWeight: '500',
                    textTransform: 'capitalize',
                    color: darkmodeColor,
                    marginTop: moderateVerticalScale(16),
                    marginBottom: moderateVerticalScale(8),
                  }}>
                  {topicName}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <CustomBorderComponent
                  text={'Lessons'}
                  inLineStyle={{
                    borderRadius: moderateScale(10),
                    paddingVertical: moderateScale(12),
                    backgroundColor: darkBackgroundColor,
                    width: moderateScale(150),
                    height: moderateVerticalScale(50),
                  }}
                  inLineTextStyle={{
                    fontWeight: '500',
                    textTransform: 'capitalize',
                    color:
                      selectedComponent === 'Lessons'
                        ? Color.THEMECOLOR
                        : Color.GRAY,
                  }}
                  onPress={() => setSelectedComponent('Lessons')}
                />

                <CustomBorderComponent
                  text={'Tests'}
                  inLineStyle={{
                    borderRadius: moderateScale(10),
                    paddingVertical: moderateScale(12),
                    backgroundColor: darkBackgroundColor,
                    width: moderateScale(150),
                    height: moderateVerticalScale(50),
                  }}
                  inLineTextStyle={{
                    fontWeight: '500',
                    textTransform: 'capitalize',
                    color:
                      selectedComponent === 'Lessons'
                        ? Color.THEMECOLOR
                        : Color.GRAY,
                  }}
                  onPress={() => {
                    navigation.navigate(
                      NavigationStringPath.COURSE_TESTSCREEN,
                      {
                        selectedCourse,
                        topicName,
                        questions: questions,
                      },
                    );
                  }}
                />
              </View>

              <View
                style={{
                  borderRadius: moderateScale(8),
                  borderColor: darkBorderColor,
                  alignItems: 'center',
                  borderWidth: 1,
                  justifyContent: 'center',
                  padding: moderateScale(16),
                  marginVertical: moderateVerticalScale(8),
                }}>
                <Image
                  source={selectedCourse?.image}
                  style={{
                    width: moderateScale(320),
                    height: moderateVerticalScale(250),
                    borderRadius: moderateScale(20),
                  }}
                />
              </View>

              <Text
                style={{
                  fontSize: scale(20),
                  marginTop: moderateVerticalScale(8),
                  fontWeight: '800',
                  fontFamily: 'Rubik-Regular',
                  color: darkmodeColor,
                }}>
                Intoduction
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  marginTop: moderateVerticalScale(4),
                  fontWeight: '400',
                  fontFamily: 'Rubik-Regular',
                  color: darkmodeColor,
                }}>
                {selectedCourse?.aboutCourseDetails}
              </Text>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </>
  );
};

export default CourseLessonScreen;
