import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },

  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(36),
  },
  image: {
    width: moderateScale(343),
    height: moderateScale(253),
  },
  welcomeTextView: {
    marginTop: moderateScale(8),
  },
  descriptionTextView: {
    marginTop: moderateScale(8),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textinputView: {
    // flex: 1,
  },
  textinputTop: {
    margin: moderateScale(12),
  },

  textinputPassword: {
    margin: moderateScale(12),
  },
  forgotPasswordView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(16),
  },

  forgotPasswordTextStyle: {
    fontSize: scale(16),
    fontWeight: '500',
  },
  SignUpView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateVerticalScale(16),
  },
  signUpTextStyle: {
    fontSize: scale(16),
    fontWeight: '500',
  },
});
export default styles;
