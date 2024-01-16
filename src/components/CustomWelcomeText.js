import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import Color from '../constants/Color';

const CustomWelcomeText = ({text, lineHeight, letterSpacing, width}) => {
  return (
    <View style={styles.welcomeTextView}>
      <Text
        style={[
          styles.textStyle,
          {lineHeight: lineHeight, letterSpacing: letterSpacing, width: width},
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
  textStyle: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(24),
    fontWeight: '500',
    color: Color.BLACK,
    textAlign: 'center',
    letterSpacing: -0.5,
    lineHeight: 32,
    fontStyle: 'normal',
  },
});
