import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import {moderateScale} from 'react-native-size-matters';

const CustomSvg = ({source, iconStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        width={moderateScale(24)}
        height={moderateScale(24)}
        viewBox={`0 0 ${moderateScale(24)} ${moderateScale(24)}`}
        style={[styles.customImageView, iconStyle]}>
        <Image
          href={source}
          width={moderateScale(24)}
          height={moderateScale(24)}
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customImageView: {},
});

export default CustomSvg;
