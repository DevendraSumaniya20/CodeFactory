import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.CustombuttonView}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  CustombuttonView: {
    width: moderateScale(311),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(16),
    backgroundColor: '#E3562A',
    borderRadius: moderateScale(16),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: moderateScale(16),
  },
  textStyle: {
    color: '#fff',
    fontSize: scale(16),
    fontFamily: 'NunitoSans-Black',
  },
});
