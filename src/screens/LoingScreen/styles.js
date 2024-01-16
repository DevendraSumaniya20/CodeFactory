import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Color from '../../constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },

  subcontainer: {
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    marginTop: moderateScale(52),
    marginHorizontal: moderateScale(16),
    marginBottom: moderateVerticalScale(16),
  },
  image: {
    width: moderateScale(343),
    height: moderateScale(253),
  },
  welcomeTextView: {
    marginVertical: moderateVerticalScale(16),
  },

  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  textinputTop: {
    marginHorizontal: moderateScale(12),
  },

  textinputPassword: {
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(16),
  },
  forgotPasswordView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(16),
  },

  forgotPasswordTextStyle: {
    fontSize: scale(14),
    fontWeight: '500',
    fontFamily: 'Rubik-Regular',
    color: Color.GRAY,
  },
  SignUpView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpTextStyle: {
    fontSize: scale(14),
    fontWeight: '500',
    fontFamily: 'Rubik-Regular',
    color: Color.GRAY,
  },
});
export default styles;
