import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomTheme from '../constants/CustomTheme';

const CustomBorderComponent = ({
  text,
  onPress,
  inLineStyle,
  inLineTextStyle,
}) => {
  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();
  return (
    <TouchableOpacity
      style={[
        styles.customBorderComponentView,
        inLineStyle,
        {borderColor: darkBorderColor},
      ]}
      onPress={onPress}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.customBorderComponentText,
            inLineTextStyle,
            {color: darkmodeColor},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CustomBorderComponent;

const styles = StyleSheet.create({
  customBorderComponentView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateVerticalScale(24),
    borderRadius: moderateScale(16),
  },
  customBorderComponentText: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(24),
    fontWeight: '500',
    lineHeight: 32,
    letterSpacing: -0.5,
  },
});
