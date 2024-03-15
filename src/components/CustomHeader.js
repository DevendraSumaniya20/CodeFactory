import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomTheme from '../constants/CustomTheme';
import Color from '../constants/Color';

const CustomHeader = ({
  text,
  iconName,
  size = scale(24),
  color,
  onPress,
  inlineStyle,
}) => {
  const {darkmodeColor, darkBorderColor} = CustomTheme();
  return (
    <View style={[styles.container, {borderColor: darkBorderColor}]}>
      <TouchableOpacity
        style={[styles.button, {borderColor: darkBorderColor}]}
        onPress={onPress}
        activeOpacity={0.5}>
        <CustomIcon
          name={iconName}
          size={size}
          color={color || darkmodeColor}
          inlineStyle={inlineStyle}
        />
      </TouchableOpacity>
      <View style={{width: '100%'}}>
        <Text style={[styles.headerTextTitle, {color: darkmodeColor}]}>
          {text}
        </Text>
      </View>
    </View>
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
    borderWidth: 0.5,
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
  },
});
