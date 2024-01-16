import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Color from '../constants/Color';

const CustomDescriptionText = ({
  text,
  fontsize = scale(14),
  marginVertical,
  marginTop,
  lineHeight,
}) => {
  return (
    <View style={styles.descriptionTextView}>
      <Text
        style={[
          styles.textStyle,
          {
            fontSize: fontsize,
            marginVertical: marginVertical,
            marginTop: marginTop,
            lineHeight: lineHeight,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default CustomDescriptionText;

const styles = StyleSheet.create({
  descriptionTextView: {
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
  },
  textStyle: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    lineHeight: 21,
    fontStyle: 'normal',
    fontSize: scale(14),
    color: Color.GRAY,
  },
});
