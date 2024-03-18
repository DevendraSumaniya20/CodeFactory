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
  profileImageContainer: {
    borderRadius: moderateScale(50),
    overflow: 'hidden',
    padding: moderateScale(16),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(32),
  },
  profileImageBorder: {
    borderWidth: 4,
    borderColor: Color.BLUE,
    borderRadius: 100,
    overflow: 'hidden',
    width: moderateScale(140),
    height: moderateVerticalScale(140),
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileGoogleImage: {
    height: moderateVerticalScale(150),
    width: moderateScale(140),
  },
  profileImage: {
    height: moderateVerticalScale(150),
    width: moderateScale(120),
  },

  menuContainer: {
    marginTop: moderateVerticalScale(16),
  },
  menuItem: {
    marginVertical: moderateVerticalScale(16),
  },
});

export default styles;
