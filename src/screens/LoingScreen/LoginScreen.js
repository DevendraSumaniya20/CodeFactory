import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomSkipButton from '../../components/CustomSkipButton';
import ImagePath from '../../constants/ImagePath';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomPagination from '../../components/CustomPagination';
import CustomIcon from '../../components/CustomIcon';

const LoginScreen = () => {
  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.INTROSCREEN2);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageView}>
          <Image source={ImagePath.LOGINIMG} style={styles.image} />
        </View>
        <View style={styles.welcomeTextView}>
          <CustomWelcomeText text={'Log in'} />
        </View>
        <View style={styles.descriptionTextView}>
          <CustomDescriptionText text={'Login with social networks '} />
        </View>

        <View style={styles.iconView}>
          <CustomIcon
            image={ImagePath.FACEBOOKICON}
            imageStyle={styles.iconImage}
          />
        </View>
        <View>
          <CustomButton
            text={'Next'}
            onPress={() => {
              NextScreen();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
