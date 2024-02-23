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
import CustomIcon from '../../components/CustomIcon';

const CourseLessonScreen = ({route}) => {
  const navigation = useNavigation();

  const {selectedCourse, topicName} = route.params || {};

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
                <Text
                  style={{
                    marginBottom: moderateVerticalScale(8),
                    color: Color.GRAY,
                    fontWeight: '300',
                    fontSize: scale(14),
                  }}>
                  3 of 11 Leassons
                </Text>
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
                    }}
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
                    }}
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
              <View
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
                    size={scale(70)}
                    color={Color.LIGHTGREEEN}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </>
  );
};

export default CourseLessonScreen;
