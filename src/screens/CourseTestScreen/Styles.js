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
  question: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '800',
    fontSize: scale(24),
    marginBottom: moderateScale(10),
  },

  questionNumber: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '500',
    marginBottom: moderateVerticalScale(8),
  },

  option: {
    marginBottom: moderateScale(10),
    padding: moderateScale(10),
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },

  optionText: {
    fontSize: scale(16),
    fontFamily: 'Rubik-Regular',
    fontWeight: '500',
  },
  scoreText: {
    fontSize: scale(18),
  },
  selectedOption: {backgroundColor: Color.LIGHTGREEEN2},

  timerContainer: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
    padding: moderateScale(5),
    borderRadius: moderateScale(8),
  },
  timer: {fontSize: scale(18)},

  continueButtonContainer: {
    marginVertical: moderateVerticalScale(32),
  },
});

export default styles;
