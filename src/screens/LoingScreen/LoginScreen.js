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
import {LoginSvg} from '../../constants/SvgPath';

const LoginScreen = () => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.TABSCREENS);
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
                <LoginSvg
                  width={moderateScale(375)}
                  height={moderateScale(264)}
                />
              </View>
              <View style={styles.welcomeTextView}>
                <CustomWelcomeText text={'Log in'} />

                <CustomDescriptionText
                  text={'Login with social networks '}
                  marginTop={moderateScale(8)}
                  lineHeight={21}
                />

                <View style={styles.iconView}>
                  <CustomImage
                    source={ImagePath.FACEBOOKICON}
                    resizeMode="contain"
                    onPress={() => {
                      Alert.alert('Facebook');
                    }}
                  />
                  <CustomImage
                    source={ImagePath.GOOGLEICON}
                    resizeMode="contain"
                    onPress={() => {
                      Alert.alert('Google');
                    }}
                  />
                  <CustomImage
                    source={ImagePath.INSTAGRAMICON}
                    resizeMode="contain"
                    onPress={() => {
                      Alert.alert('Instagram');
                    }}
                  />
                </View>
              </View>
              <View style={styles.textinputView}>
                <View style={styles.textinputTop}>
                  <CustomInput
                    // autoFocus={true}
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

                <View style={styles.forgotPasswordView}>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('Forgot');
                    }}>
                    <Text style={styles.forgotPasswordTextStyle}>
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: moderateScale(0)}}>
                  <CustomButton
                    text={'Log in'}
                    onPress={() => {
                      NextScreen();
                    }}
                  />
                </View>
              </View>
              <View style={styles.SignUpView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(NavigationStringPath.SIGNUPSCREEN);
                  }}>
                  <Text style={styles.signUpTextStyle}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default LoginScreen;
