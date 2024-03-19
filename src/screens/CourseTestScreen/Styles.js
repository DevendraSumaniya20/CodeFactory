import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {flex: 1},
  marginContainer: {marginHorizontal: moderateScale(16)},
  question: {fontSize: scale(24), marginBottom: moderateScale(10)},
  option: {
    fontSize: scale(20),
    marginBottom: moderateScale(10),
    padding: moderateScale(10),
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },
  selectedOption: {backgroundColor: 'lightblue'},
  continueButton: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
  continueButtonText: {fontSize: scale(18)},
  timerContainer: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
    padding: moderateScale(5),
    borderRadius: moderateScale(8),
  },
  timer: {fontSize: scale(18)},
});

export default styles;
