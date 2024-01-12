import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const CustomPagination = ({
  backgroundColor = '#65AAEA',
  borderRadius = 10,
  text,
  marginHorizontal,
  height,
  width,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.paginationStyle,
        {
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          marginHorizontal: marginHorizontal,
          height: height,
          width: width,
        },
      ]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomPagination;

const styles = StyleSheet.create({
  paginationStyle: {},
});
