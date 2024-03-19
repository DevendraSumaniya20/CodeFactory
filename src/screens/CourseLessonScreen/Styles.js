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
});

export default styles;
