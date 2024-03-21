import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Share,
  Alert,
  ScrollView,
} from 'react-native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import CustomIcon from '../../components/CustomIcon';
import CustomTheme from '../../constants/CustomTheme';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';

const CourseResultScreen = ({route, navigation}) => {
  const {totalScore, totalQuestions, selectedCourse, topicName, questions} =
    route.params;

  const {darkmodeColor, darkBackgroundColor} = CustomTheme();

  const handleRetakeTest = () => {
    Alert.alert(
      'Retake Test',
      'Do you want to retake the test?',
      [
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate(NavigationStringPath.COURSE_LESSONSCREEN, {
              selectedCourse,
              topicName,
              questions,
            });
          },
        },
        {
          text: 'No',
          onPress: () => {
            navigation.navigate(NavigationStringPath.PROFILESCREEN, {
              totalScore,
            });
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const onShared = async () => {
    try {
      const result = await Share.share({
        message: 'Try this app to check your knowledge',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismiss');
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: darkBackgroundColor}}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <View style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
        <SafeAreaView style={styles.subContainer}>
          <View style={styles.marginContainer}>
            <CustomHeader
              iconName={'chevron-back'}
              onPress={() => navigation.goBack()}
              text={selectedCourse?.type}
            />

            <TouchableOpacity style={styles.shareButton} onPress={onShared}>
              <CustomIcon
                name={'share-social-sharp'}
                size={scale(24)}
                color={darkmodeColor}
              />
            </TouchableOpacity>

            <View style={styles.contentContainer}>
              <Text style={[styles.heading, {color: darkmodeColor}]}>
                Test Result
              </Text>
              <View style={styles.resultContainer}>
                <Text style={[styles.resultText, {color: darkmodeColor}]}>
                  Your Score: {totalScore}
                </Text>
                <Text style={[styles.resultText, {color: darkmodeColor}]}>
                  Total Questions Answered: {totalQuestions}
                </Text>
              </View>

              <CustomButton text={'Retake Test'} onPress={handleRetakeTest} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default CourseResultScreen;
