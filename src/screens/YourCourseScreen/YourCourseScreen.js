import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import {NotSavedSvg} from '../../constants/SvgPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';

const YourCourseScreen = () => {
  const navigation = useNavigation();
  return (
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
            text={'Saved'}
          />

          <View style={styles.imageView}>
            <NotSavedSvg />
          </View>
          <View style={styles.welcomeTextView}>
            <CustomWelcomeText
              text={' Course not saved'}
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
              text={'Try saving the course  '}
            />
            <CustomDescriptionText
              fontsize={scale(14)}
              lineHeight={21}
              color={Color.GRAY}
              fontFamily="Rubik-Regular"
              fontWeight="400"
              text={'again in a few minutes '}
            />
          </View>

          <View style={styles.continueToubleView}>
            <CustomButton text={'Continue'} onPress={() => {}} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default YourCourseScreen;
