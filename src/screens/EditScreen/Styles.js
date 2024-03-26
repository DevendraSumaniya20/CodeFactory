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
  formContainer: {},
  label: {
    fontSize: scale(16),
    fontWeight: 'bold',
    marginBottom: moderateVerticalScale(8),
    fontFamily: 'Rubik-Regular',
  },
  input: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateVerticalScale(20),
    paddingVertical: moderateVerticalScale(8),
  },
});

export default styles;
