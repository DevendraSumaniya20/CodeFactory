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
  helloTextStyle: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(16),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: -0.5,
    color: Color.GRAY,
  },
  userTextStyle: {
    fontFamily: 'Rubik-Regular',
    fontSize: scale(32),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 42,
    letterSpacing: -1,
    color: Color.BLACK,
  },
  notificationView: {
    borderRadius: moderateScale(100),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(5),
  },

  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginHorizontal: moderateScale(16),
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
