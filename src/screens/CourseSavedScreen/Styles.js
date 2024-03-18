import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: moderateScale(16),
  },
  imageView: {
    marginTop: moderateVerticalScale(127),
  },
  welcomeTextView: {
    marginTop: moderateVerticalScale(32),
  },
  descriptionTextView: {
    marginTop: moderateVerticalScale(8),
  },
  continueToubleView: {
    marginTop: moderateVerticalScale(32),
  },
  renderMainView: {
    justifyContent: 'center',
    borderWidth: 1,
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
  },

  renderItemImage: {
    width: moderateScale(310),
    height: moderateVerticalScale(280),
    borderRadius: moderateScale(8),
  },
  renderTouchableOpacity: {
    alignItems: 'center',
    backgroundColor: Color.BLUE,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    marginLeft: moderateScale(260),
  },

  renderTouchableText: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'right',
  },
  renderSecondView: {
    marginHorizontal: moderateScale(16),
    marginVertical: moderateVerticalScale(8),
  },
  renderDurationText: {
    color: Color.LIGHTGREEEN,
    fontSize: scale(12),
    fontWeight: '500',
    fontFamily: 'Rubik-Bold',
    marginBottom: moderateVerticalScale(4),
  },
  renderTypeText: {
    fontSize: scale(24),
    fontWeight: '500',
    fontFamily: 'Rubik-Bold',
    letterSpacing: -0.5,
    lineHeight: 32,
  },
  renderOtherDetailsText: {
    fontSize: scale(14),
    fontWeight: '400',
    fontFamily: 'Rubik-Regular',
    lineHeight: 21,
    color: Color.BLACK,
  },
});

export default styles;
