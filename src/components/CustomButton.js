import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Color from '../constants/Color';
import CustomTheme from '../constants/CustomTheme';

const CustomButton = ({text, onPress, width, inlineStyle}) => {
  const {darkmodeColor, darkBackgroundColor, darkBorderColor} = CustomTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.CustombuttonView,
        inlineStyle,
        {
          // backgroundColor: darkBackgroundColor,
          // borderColor: darkBorderColor,
        },
      ]}>
      <Text
        style={[
          styles.textStyle,
          {
            // color: darkmodeColor
          },
        ]}>
        {text}
      </Text>
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
    // borderWidth: 1,
  },
  textStyle: {
    color: Color.WHITE,
    fontSize: scale(16),
    fontFamily: 'Rubik-Regular',
    fontWeight: '800',
    lineHeight: 18,
    textAlign: 'center',
  },
});
