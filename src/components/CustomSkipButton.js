import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const CustomSkipButton = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSkipButton;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'flex-end',
    paddingRight: moderateScale(16),
    marginTop: moderateScale(8),
  },
  textStyle: {
    fontFamily: 'Rubik-Medium',
    fontSize: moderateScale(16),
    color: '#78746D',
    fontWeight: '500',
    lineHeight: 16,
  },
});
