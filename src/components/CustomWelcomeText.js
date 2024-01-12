import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

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
    fontFamily: 'Rubik-Bold',
    fontSize: scale(24),
    fontWeight: '500',
    color: '#3C3A36',
    textAlign: 'center',
  },
});
