import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const CustomWelcomeText = ({text}) => {
  return (
    <View style={styles.welcomeTextView}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default CustomWelcomeText;

const styles = StyleSheet.create({
  welcomeTextView: {
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: scale(24),
    lineHeight: 32,
    fontWeight: '500',
    color: '#3C3A36',
    letterSpacing: -0.5,
    width: moderateScale(200),
    textAlign: 'center',
  },
});
