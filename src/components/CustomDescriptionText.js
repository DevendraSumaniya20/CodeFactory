import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const CustomDescriptionText = ({text, fontsize = scale(16)}) => {
  return (
    <View style={styles.descriptionTextView}>
      <Text style={[styles.textStyle, {fontSize: fontsize}]}>{text}</Text>
    </View>
  );
};

export default CustomDescriptionText;

const styles = StyleSheet.create({
  descriptionTextView: {
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'NunitoSans-ExtraLight',
    textAlign: 'auto',
  },
});
