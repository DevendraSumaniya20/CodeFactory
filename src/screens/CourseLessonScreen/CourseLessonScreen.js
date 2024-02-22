import React, {useState, useEffect} from 'react';
import {Alert, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
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
import CustomBorderComponent from '../../components/CustomBorderComponent';

const CourseLessonScreen = ({route}) => {
  const navigation = useNavigation();

  const {selectedCourse, topicName} = route.params || {};

  console.log('........................>>>>>>', topicName);
  return (
    <>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingBottom: moderateVerticalScale(800),
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

              <View>
                <Text>{topicName}</Text>
                <Text>3 of 11 Leassons</Text>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    gap: 15,
                  }}>
                  <CustomBorderComponent
                    text={'Lessons'}
                    inLineStyle={{
                      borderRadius: 10,
                      paddingVertical: moderateScale(12),
                      backgroundColor: '#F8F2EE',
                      width: moderateScale(120),
                      height: moderateVerticalScale(50),
                    }}
                    inLineTextStyle={{
                      fontWeight: '500',
                      textTransform: 'capitalize',
                    }}
                  />

                  <CustomBorderComponent
                    text={'Tests'}
                    inLineStyle={{
                      borderRadius: 10,
                      paddingVertical: moderateScale(12),
                      backgroundColor: '#F8F2EE',
                      width: moderateScale(120),
                      height: moderateVerticalScale(50),
                    }}
                    inLineTextStyle={{
                      fontWeight: '500',
                      textTransform: 'capitalize',
                    }}
                  />

                  <CustomBorderComponent
                    text={'Discussion'}
                    inLineStyle={{
                      borderRadius: 10,
                      paddingVertical: moderateScale(12),
                      backgroundColor: '#F8F2EE',
                      width: moderateScale(120),
                      height: moderateVerticalScale(50),
                    }}
                    inLineTextStyle={{
                      fontWeight: '500',
                      textTransform: 'capitalize',
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </>
  );
};

export default CourseLessonScreen;
