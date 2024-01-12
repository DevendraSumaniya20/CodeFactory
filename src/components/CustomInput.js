import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomIcon from './CustomIcon';

const CustomInput = ({
  placeholder = '',
  inputStyle = {},
  onChangeText = () => {},
  secureTextEntry,
  onPressRight,
  rightIcon,
}) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={placeholder}
        style={{...styles.inputStyle, ...inputStyle}}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {!!rightIcon && (
        <View style={styles.rightIconContainer}>
          <TouchableOpacity onPress={onPressRight}>
            <CustomIcon name={rightIcon} size={20} color={'#000'} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputStyle: {
    padding: moderateScale(12),
    borderBottomColor: '#AAA',
    fontSize: scale(16),
    height: moderateScale(52),
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
    justifyContent: 'space-between',
  },
  rightIconContainer: {
    marginRight: moderateScale(8),
    alignItems: 'center',
  },
});
