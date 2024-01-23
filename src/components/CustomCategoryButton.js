import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {moderateScaleVertical} from '../constants/responsiveSize';
import Color from '../constants/Color';

const CustomCategoryButton = ({text}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={styles.cardTouchble}>
        <Text style={styles.cardTextStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCategoryButton;

const styles = StyleSheet.create({
  cardTouchble: {
    marginVertical: moderateScaleVertical(3),
    backgroundColor: Color.BLUE,
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(11),
    paddingVertical: moderateVerticalScale(3),

    marginHorizontal: moderateScale(8),
  },
  cardTextStyle: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(12),
    fontWeight: '500',
    width: 'auto',

    lineHeight: 18,
    color: Color.WHITE,
    textAlign: 'center',
    overflow: 'scroll',
  },
});
