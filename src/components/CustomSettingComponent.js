import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Color from '../constants/Color';

const CustomSettingComponent = ({text, icon, onToggle, icon2}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>{icon}</View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onToggle} style={styles.toggleButton}>
        {icon2}
      </TouchableOpacity>
    </View>
  );
};

export default CustomSettingComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(16),
    paddingVertical: moderateVerticalScale(8),
    paddingHorizontal: moderateScale(16),
    justifyContent: 'space-between',
    marginVertical: moderateVerticalScale(16),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: Color.BLUE,
    borderRadius: moderateScale(56),
    alignItems: 'center',
    width: moderateScale(32),
    height: moderateVerticalScale(32),
    justifyContent: 'center',
  },
  iconBackground: {
    borderRadius: moderateScale(56),
  },
  textContainer: {
    marginRight: moderateScale(8),
    marginLeft: moderateScale(12),
  },
  text: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(20),
    fontWeight: '500',
    lineHeight: 26,
    letterSpacing: -0.5,
  },
  toggleButton: {
    flexDirection: 'row',
    height: moderateVerticalScale(66),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
