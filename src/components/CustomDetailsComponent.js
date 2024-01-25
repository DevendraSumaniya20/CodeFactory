import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Color from '../constants/Color';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const CustomDetailsComponent = ({text1, text2, icon1, icon2, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>{icon1}</View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{text1}</Text>
          <Text style={styles.text2}>{text2}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>{icon2}</TouchableOpacity>
    </View>
  );
};

export default CustomDetailsComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(16),
    paddingVertical: moderateVerticalScale(17),
    paddingHorizontal: moderateScale(16),
    justifyContent: 'space-between',
    marginBottom: moderateVerticalScale(16),
  },

  iconContainer: {
    backgroundColor: Color.BLUE,
    borderRadius: moderateScale(56),
    alignItems: 'center',
    width: moderateScale(32),
    height: moderateVerticalScale(32),
    justifyContent: 'center',
  },

  textContainer: {
    marginRight: moderateScale(8),
    marginLeft: moderateScale(12),
  },
  text1: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(20),
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: -0.5,
    color: Color.BLACK,
  },
  text2: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: -0.5,
    color: Color.GRAY,
  },
});
