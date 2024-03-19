import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';

const CourseResultScreen = ({route}) => {
  const {totalScore, questions} = route.params || {};
  const navigation = useNavigation();

  const handleAgainButtonPress = () => {
    navigation.navigate(NavigationStringPath.COURSE_TESTSCREEN, {
      resetQuiz: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Course Result</Text>
      <Text style={styles.scoreText}>Your Score: {totalScore}</Text>
      <CustomButton text={'Again'} onPress={handleAgainButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 10,
  },
  zeroScoreText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
});

export default CourseResultScreen;
