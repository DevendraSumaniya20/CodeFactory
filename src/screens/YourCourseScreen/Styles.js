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
});

export default styles;
