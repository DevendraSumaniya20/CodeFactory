import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: moderateScale(16),
  },

  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(375),
    height: moderateScale(264),
    flexShrink: 0,
  },
  welcomeTextView: {
    marginTop: moderateScale(16),
    marginBottom: moderateScale(8),
  },
  descriptionTextView: {
    marginBottom: moderateScale(16),
  },
  paginationMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(36),
    marginBottom: moderateScale(72),
  },
});
export default styles;
