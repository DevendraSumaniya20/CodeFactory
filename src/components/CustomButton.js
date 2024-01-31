import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Color from '../constants/Color';

const CustomButton = ({text, onPress, width, inlineStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.CustombuttonView, inlineStyle]}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  CustombuttonView: {
    width: moderateScale(343),
    paddingHorizontal: moderateScale(32),
    paddingVertical: moderateScale(16),
    backgroundColor: Color.THEMECOLOR,
    borderRadius: moderateScale(16),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: moderateScale(16),
  },
  textStyle: {
    color: Color.WHITE,
    fontSize: scale(16),
    fontFamily: 'Rubik-Bold',
    fontWeight: '500',
    lineHeight: 18,
    fontStyle: 'normal',
  },
});
