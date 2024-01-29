import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomSkipButton from '../../components/CustomSkipButton';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomPagination from '../../components/CustomPagination';
import Color from '../../constants/Color';
import {INTRO1} from '../../constants/SvgPath';

const IntroScreen1 = () => {
  const navigation = useNavigation();

  const NextScreen = () => {
    navigation.navigate(NavigationStringPath.INTROSCREEN2);
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <INTRO1 width={moderateScale(375)} height={moderateScale(264)} />
          </View>
          <View style={styles.welcomeTextView}>
            <CustomWelcomeText
              text={'Learn anytime and anywhere'}
              width={moderateScale(200)}
            />
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
              text={''}
              paddingHorizontal={moderateScale(16)}
              width={moderateScale(16)}
              height={moderateScale(6)}
            />
            <CustomPagination
              borderRadius={50}
              backgroundColor={Color.GRAY}
              marginHorizontal={moderateScale(12)}
              width={moderateScale(6)}
              height={moderateScale(6)}
            />
            <CustomPagination
              borderRadius={50}
              backgroundColor={Color.GRAY}
              width={moderateScale(6)}
              height={moderateScale(6)}
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
        </View>
      </View>
    </>
  );
};

export default IntroScreen1;
