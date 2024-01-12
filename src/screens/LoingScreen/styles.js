import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(10),
  },

  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(375),
    height: moderateScale(264),
  },
  welcomeTextView: {
    marginBottom: moderateScale(16),
  },
  descriptionTextView: {
    marginBottom: moderateScale(26),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
export default styles;
