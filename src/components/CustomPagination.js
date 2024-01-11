import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const CustomPagination = ({
  paddingHorizontal = moderateScale(20),
  backgroundColor = '#65AAEA',
  borderRadius = 10,
  text,
  marginRight,
  marginLeft,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.paginationStyle,
        {
          paddingHorizontal: paddingHorizontal,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          marginRight: marginRight,
          marginLeft: marginLeft,
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
