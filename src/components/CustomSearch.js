import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomIcon from './CustomIcon';
import Color from '../constants/Color';

const CustomSearch = ({
  placeholder = '',
  inputStyle = {},
  onChangeText = () => {},
  secureTextEntry,
  onPressRight,
  rightIcon,
  autoFocus,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={placeholder}
        style={{...styles.inputStyle, ...inputStyle}}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        onSubmitEditing={onSubmitEditing}
      />
      {!!rightIcon && (
        <View style={styles.rightIconContainer}>
          <TouchableOpacity onPress={onPressRight}>
            <CustomIcon name={rightIcon} size={20} color={'#000000'} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  inputStyle: {
    padding: moderateScale(12),
    borderColor: Color.LIGHTGRAY,
    fontSize: scale(14),
    height: moderateScale(52),
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontStyle: 'normal',
    alignItems: 'center',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(12),
    borderWidth: 0.5,
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  rightIconContainer: {
    marginRight: moderateScale(8),
    alignItems: 'center',
  },
});
