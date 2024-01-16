import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import ImagePath from '../../constants/ImagePath';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import CustomImage from '../../components/CustomImage';
import CustomInput from '../../components/CustomInput';
import CustomIcon from '../../components/CustomIcon';
import {moderateScale, scale} from 'react-native-size-matters';
import {SignupSvg} from '../../constants/SvgPath';

const SignUpScreen = () => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.PROFILESCREEN);
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.subcontainer}>
          <SafeAreaView style={styles.container}>
            <View style={{marginHorizontal: moderateScale(16)}}>
              <View style={styles.imageView}>
                <SignupSvg
                  width={moderateScale(375)}
                  height={moderateScale(264)}
                />
              </View>
              <View style={styles.welcomeTextView}>
                <CustomWelcomeText text={'Sign up'} />

                <CustomDescriptionText
                  text={'Create your account '}
                  marginTop={moderateScale(8)}
                  lineHeight={21}
                />
              </View>

              <View style={styles.textinputView}>
                <View style={styles.textinputName}>
                  <CustomInput
                    placeholder="Name"
                    onchangeText={text => {
                      setValue(text);
                    }}
                  />
                </View>
                <View style={styles.textinputName}>
                  <CustomInput
                    placeholder="Email"
                    onchangeText={text => {
                      setValue(text);
                    }}
                  />
                </View>
                <View style={styles.textinputPassword}>
                  <CustomInput
                    inputStyle={{width: '90%'}}
                    secureTextEntry={secureTextEntry}
                    placeholder="Password"
                    onChangeText={text => {
                      setValue(text);
                    }}
                    rightIcon={
                      secureTextEntry ? 'eye-off-outline' : 'eye-outline'
                    }
                    onPressRight={() => setSecureTextEntry(!secureTextEntry)}
                  />
                </View>

                <View style={{marginTop: moderateScale(0)}}>
                  <CustomButton
                    text={'Sign up'}
                    onPress={() => {
                      NextScreen();
                    }}
                  />
                </View>
              </View>

              <View style={styles.loginView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(NavigationStringPath.LOGINSCREEN);
                  }}>
                  <Text style={styles.loginTextStyle}>Log in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SignUpScreen;
