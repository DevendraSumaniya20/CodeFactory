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
  logoutView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutTextStyle: {
    fontSize: scale(20),
    fontWeight: '700',
    fontFamily: 'Rubik-Regular',
  },
});

export default styles;
