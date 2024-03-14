import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const CustomWelcomeText = ({
  text,
  lineHeight,
  letterSpacing,
  width,
  fontWeight = '500',
  fontFamily = 'Rubik-Regular',
  fontSize = scale(24),
  inlineStyle,
}) => {
  return (
    <View style={styles.welcomeTextView}>
      <Text
        style={[
          styles.textStyle,
          inlineStyle,
          {
            lineHeight: lineHeight,
            letterSpacing: letterSpacing,
            width: width,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            fontSize: fontSize,
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
