import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

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
    fontFamily: 'NunitoSans-Black',
    fontSize: scale(24),
    lineHeight: 32,
  },
});
