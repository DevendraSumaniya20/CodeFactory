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
    marginTop: moderateScale(36),
  },
  image: {
    width: moderateScale(375),
    height: moderateScale(264),
  },
  welcomeTextView: {
    marginBottom: moderateScale(16),
    marginTop: moderateScale(16),
  },
  descriptionTextView: {
    marginBottom: moderateScale(26),
    marginTop: moderateScale(16),
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textinputView: {
    flex: 1,
  },
  textinputTop: {
    margin: moderateScale(12),
  },

  textinputPassword: {
    margin: moderateScale(12),
  },
});
export default styles;
