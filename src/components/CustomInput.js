import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const CustomInput = ({
  placeholder = '',
  inputStyle = {},

  onchangeText = () => {},
  secureTextEntry,
}) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={placeholder}
        style={{...styles.inputStyle, ...inputStyle}}
        onchangeText={onchangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputStyle: {
    padding: moderateScale(12),
    borderBottomColor: '#AAA',
    fontFamily: 'NunitoSans-Black',
    fontSize: scale(16),
    height: moderateScale(52),
  },
  textInput: {
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
  },
});
