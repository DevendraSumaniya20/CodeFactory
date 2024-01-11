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

const IntroScreen2 = () => {
  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.INTROSCREEN3);
  };
  const SKipScreen = () => {
    navigation.navigate(NavigationStringPath.LOGINSCREEN);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <CustomSkipButton
          text={'skip'}
          onPress={() => {
            SKipScreen();
          }}
        />
        <View style={styles.imageView}>
          <Image source={ImagePath.INTRO1IMG2} style={styles.image} />
        </View>
        <View style={styles.welcomeTextView}>
          <CustomWelcomeText text={'Find a course'} />
          <CustomWelcomeText text={'for you'} />
        </View>
        <View style={styles.descriptionTextView}>
          <CustomDescriptionText
            text={
              'Quarantine is the perfect time to spend your day learning something new, from anywhere! '
            }
          />
        </View>
        <View style={styles.paginationMainView}>
          <CustomPagination
            borderRadius={30}
            paddingHorizontal={moderateScale(8)}
            backgroundColor={'#AAA'}
            marginRight={moderateScale(8)}
          />
          <CustomPagination
            text={''}
            paddingHorizontal={moderateScale(16)}
            marginRight={moderateScale(8)}
          />
          <CustomPagination
            paddingHorizontal={moderateScale(8)}
            backgroundColor={'#AAA'}
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

export default IntroScreen2;
