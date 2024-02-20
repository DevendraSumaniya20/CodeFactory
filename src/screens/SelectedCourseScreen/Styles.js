import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Color.WHITE},
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
    borderWidth: 0.8,
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
  },

  renderItemImage: {
    height: moderateScale(138),
    width: moderateScale(343),
  },

  iconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -40}, {translateY: -40}],
    zIndex: 1, // Ensure the icon is above the image
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
    color: Color.WHITE,
  },
  renderSecondView: {
    marginHorizontal: moderateScale(16),
    marginTop: moderateVerticalScale(16),
    marginBottom: moderateVerticalScale(8),
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
