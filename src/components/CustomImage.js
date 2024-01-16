import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Color from '../constants/Color';

const CustomImage = ({source, iconStyle, resizeMode, onPress}) => {
  return (
    <View style={styles.customImageView}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={source}
          style={[styles.iconImage, iconStyle]}
          resizeMode={resizeMode}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  customImageView: {
    // flex: 1,
    backgroundColor: Color.BLUE,
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(6),
  },
  iconImage: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});
