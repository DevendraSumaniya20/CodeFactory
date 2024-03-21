import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Color from '../../constants/Color';

const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {flex: 1},
  marginContainer: {marginHorizontal: moderateScale(16)},
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateVerticalScale(150),
  },

  heading: {
    fontSize: scale(28),
    fontWeight: 'bold',
    marginBottom: moderateVerticalScale(30),
    textAlign: 'center',
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: moderateVerticalScale(30),
  },
  resultText: {
    fontSize: scale(20),
    marginBottom: moderateVerticalScale(30),
  },
  shareButton: {
    position: 'absolute',
    top: moderateVerticalScale(10),
    right: moderateScale(20),
  },
});

export default styles;
