import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Color from '../../constants/Color';
import {moderateScaleVertical} from '../../constants/responsiveSize';

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
    marginHorizontal: moderateScale(16),
    marginBottom: moderateVerticalScale(16),
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

  textinputName: {
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(16),
  },
  textinputPassword: {
    marginHorizontal: moderateScale(12),
    marginTop: moderateScale(16),
  },

  loginView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTextStyle: {
    fontSize: scale(14),
    fontWeight: '500',
    fontFamily: 'Rubik-Regular',
    color: Color.GRAY,
  },
});
export default styles;
