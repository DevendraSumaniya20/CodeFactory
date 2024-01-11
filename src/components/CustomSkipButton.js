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
  },
  textStyle: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: moderateScale(24),
  },
});
