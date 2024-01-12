import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const CustomImage = ({source, iconStyle, resizeMode}) => {
  return (
    <View style={styles.customImageView}>
      <Image
        source={source}
        style={[styles.iconImage, iconStyle]}
        resizeMode={resizeMode}
      />
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  customImageView: {
    // flex: 1,
    backgroundColor: '#65AAEA',
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(6),
  },
  iconImage: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
});
