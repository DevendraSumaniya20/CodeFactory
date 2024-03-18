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
  topHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  resultContainer: {
    marginTop: moderateVerticalScale(12),
    marginBottom: moderateVerticalScale(16),
  },
  resultText: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(24),
    fontWeight: '500',
    lineHeight: 32,

    letterSpacing: -0.5,
  },

  renderMainView: {
    justifyContent: 'center',
    borderWidth: 0.8,
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
  },

  renderItemImage: {
    height: moderateVerticalScale(200),
    width: moderateScale(200),
  },
  renderTouchableOpacity: {
    alignItems: 'center',
    backgroundColor: Color.BLUE,
    borderRadius: moderateScale(16),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    marginLeft: moderateScale(245),
  },

  renderTouchableText: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(14),
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'right',
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
  },

  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(12),
  },
  categoryTextStyle: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(14),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
  },
});

export default styles;
