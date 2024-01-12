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

const LoginScreen = () => {
  const [value, setValue] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.INTROSCREEN2);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.subcontainer}>
        <SafeAreaView style={styles.container}>
          <View style={styles.imageView}>
            <Image source={ImagePath.LOGINIMG} style={styles.image} />
          </View>
          <View style={styles.welcomeTextView}>
            <CustomWelcomeText text={'Log in'} />

            <CustomDescriptionText
              text={'Login with social networks '}
              // marginVertical={moderateScale(8)}
              marginTop={moderateScale(8)}
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
                rightIcon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
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
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
