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
  topHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  renderMainView: {
    justifyContent: 'center',
    // borderWidth: 0.8,
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
  },

  renderItemImage: {
    height: moderateVerticalScale(257),
    width: moderateScale(375),
  },
  renderTouchableOpacity: {
    alignItems: 'center',
    backgroundColor: Color.BLUE,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    marginLeft: moderateScale(260),
    marginBottom: moderateVerticalScale(8),
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
    marginTop: moderateVerticalScale(4),
  },
  renderDurationText: {
    color: Color.LIGHTGRAY,
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
