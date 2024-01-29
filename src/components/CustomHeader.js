import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import {moderateScale, scale} from 'react-native-size-matters';
import Color from '../constants/Color';
import {moderateScaleVertical} from '../constants/responsiveSize';

const CustomHeader = ({text, iconName, size, color, onPress}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <CustomIcon name={iconName} size={size} color={color} />
        </TouchableOpacity>
        <View style={{width: '100%'}}>
          <Text style={styles.headerTextTitle}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: moderateScale(6),
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
    width: moderateScale(48),
    height: moderateScale(48),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextTitle: {
    fontFamily: 'Rubik-Bold',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: scale(24),
    lineHeight: 32,
    letterSpacing: -0.5,
    color: Color.BLACK,
  },
});
