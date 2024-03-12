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

const CourseLessonScreen = ({route}) => {
  const navigation = useNavigation();

  const {selectedCourse, topicName, totalTopics, questions} =
    route.params || {};
  const [selectedComponent, setSelectedComponent] = useState('Lessons');

  return (
    <>
      <ScrollView
        style={{flex: 1, backgroundColor: '#fff'}}
        contentContainerStyle={{
          paddingBottom: moderateVerticalScale(400),
        }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <SafeAreaView style={styles.subContainer}>
            <View style={styles.marginContainer}>
              <CustomHeader
                iconName={'chevron-back'}
                color={Color.BLACK}
                onPress={() => {
                  navigation.goBack();
                }}
                text={selectedCourse?.type}
              />

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: scale(24),
                    fontWeight: '500',
                    textTransform: 'capitalize',
                    color: Color.BLACK,
                    marginTop: moderateVerticalScale(16),
                    marginBottom: moderateVerticalScale(8),
                  }}>
                  {topicName}
                </Text>
                {/* <Text
                  style={{
                    marginBottom: moderateVerticalScale(8),
                    color: Color.GRAY,
                    fontWeight: '300',
                    fontSize: scale(14),
                  }}>
                  3 of 4 Leassons
                </Text> */}
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    gap: moderateScale(4),
                    flex: 1,
                    width: 'auto',
                  }}>
                  <CustomBorderComponent
                    text={'Lessons'}
                    inLineStyle={{
                      borderTopLeftRadius: moderateScale(20),
                      borderBottomLeftRadius: moderateScale(20),
                      borderTopRightRadius: moderateScale(1),
                      borderBottomRightRadius: moderateScale(1),
                      paddingVertical: moderateScale(12),
                      backgroundColor: '#F8F2EE',
                      width: moderateScale(120),
                      height: moderateVerticalScale(50),
                    }}
                    inLineTextStyle={{
                      fontWeight: '500',
                      textTransform: 'capitalize',
                      color: selectedComponent === 'Lessons' ? 'black' : 'gray',
                    }}
                    onPress={() => setSelectedComponent('Lessons')}
                  />

                  <CustomBorderComponent
                    text={'Tests'}
                    inLineStyle={{
                      borderRadius: 1,
                      paddingVertical: moderateScale(12),
                      backgroundColor: '#F8F2EE',
                      width: moderateScale(120),
                      height: moderateVerticalScale(50),
                    }}
                    inLineTextStyle={{
                      fontWeight: '500',
                      textTransform: 'capitalize',
                      color: selectedComponent === 'Tests' ? 'black' : 'gray',
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

                  <CustomBorderComponent
                    text={'Discussion'}
                    inLineStyle={{
                      borderTopLeftRadius: moderateScale(1),
                      borderBottomLeftRadius: moderateScale(1),
                      borderTopRightRadius: moderateScale(20),
                      borderBottomRightRadius: moderateScale(20),
                      paddingVertical: moderateScale(12),
                      backgroundColor: '#F8F2EE',
                      width: moderateScale(170),
                      height: moderateVerticalScale(50),
                    }}
                    inLineTextStyle={{
                      fontWeight: '500',
                      textTransform: 'capitalize',
                      color:
                        selectedComponent === 'Discussion' ? 'black' : 'gray',
                    }}
                    onPress={() => setSelectedComponent('Discussion')}
                  />
                </View>
              </ScrollView>

              <View
                style={{
                  width: moderateScale(343),
                  height: moderateVerticalScale(250),
                  borderRadius: moderateScale(8),
                  borderColor: Color.BLACK,
                  borderWidth: 1,
                  alignItems: 'center',
                  marginTop: moderateVerticalScale(8),
                }}>
                <Image
                  source={selectedCourse.image}
                  style={{
                    width: moderateScale(343),
                    height: moderateVerticalScale(194),
                    borderRadius: moderateScale(8),
                    resizeMode: 'contain',
                  }}
                />
              </View>
              {/* <View
                style={{
                  alignItems: 'flex-end',
                  marginRight: moderateScale(8),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('You can continue Course ');
                  }}>
                  <CustomIcon
                    name={'caret-forward-circle-outline'}
                    size={scale(60)}
                    color={Color.LIGHTGREEEN}
                  />
                </TouchableOpacity>
              </View> */}
              <Text
                style={{
                  fontSize: scale(20),
                  marginTop: moderateVerticalScale(8),
                  fontWeight: '800',
                  fontFamily: 'Rubik-Regular',
                  color: Color.BLACK,
                }}>
                Intoduction
              </Text>
              <Text
                style={{
                  fontSize: scale(14),
                  marginTop: moderateVerticalScale(4),
                  fontWeight: '400',
                  fontFamily: 'Rubik-Regular',
                  color: Color.GRAY,
                }}>
                {selectedCourse.aboutCourseDetails}
              </Text>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </>
  );
};

export default CourseLessonScreen;
