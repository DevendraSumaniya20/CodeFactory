import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Color from '../constants/Color';

const CustomWelcomeText = ({
  text,
  lineHeight,
  letterSpacing,
  width,
  fontWeight = '500',
  fontFamily = 'Rubik-Regular',
  fontSize = scale(24),
  color,
}) => {
  return (
    <View style={styles.welcomeTextView}>
      <Text
        style={[
          styles.textStyle,
          {
            lineHeight: lineHeight,
            letterSpacing: letterSpacing,
            width: width,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: color,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

export default CustomWelcomeText;

const styles = StyleSheet.create({
  welcomeTextView: {
    alignItems: 'center',
  },
  textStyle: {},
});
