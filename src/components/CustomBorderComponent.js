import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const CustomBorderComponent = ({text, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.customBorderComponentView}
      onPress={onPress}>
      <TouchableOpacity>
        <Text style={styles.customBorderComponentText}>{text}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CustomBorderComponent;

const styles = StyleSheet.create({
  customBorderComponentView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.BLACK,
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
