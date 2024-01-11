import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomIcon = ({
  onPress,
  iconName,
  iconSource,
  iconStyle,
  resizeMode = 'contain',
}) => {
  return (
    <View style={styles.iconView}>
      <TouchableOpacity onPress={onPress}>
        {iconName && <Text style={iconStyle}>{iconName}</Text>}
        {iconSource && (
          <Image
            source={iconSource}
            style={[styles.iconImage, iconStyle]}
            resizeMode={resizeMode}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {},
});
