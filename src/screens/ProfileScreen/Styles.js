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
  logoutView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutTextStyle: {
    fontSize: scale(14),
    fontWeight: '500',
    fontFamily: 'Rubik-Regular',
    color: Color.GRAY,
  },
});

export default styles;
