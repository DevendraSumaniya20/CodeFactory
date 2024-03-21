import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import NavigationStringPath from '../../constants/NavigationStringPath';

const CourseResultScreen = ({route, navigation}) => {
  const {totalScore, totalQuestions, selectedCourse, topicName, questions} =
    route.params;

  const handleRetakeTest = () => {
    navigation.navigate(NavigationStringPath.PROFILESCREEN, {
      totalScore,
    });

    navigation.navigate(NavigationStringPath.COURSE_LESSONSCREEN, {
      selectedCourse,
      topicName,
      questions,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Course Result</Text>
      <Text style={styles.resultText}>Your Score: {totalScore}</Text>
      <Text style={styles.resultText}>
        Total Questions Answered: {totalQuestions}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleRetakeTest}>
        <Text style={styles.buttonText}>Retake Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CourseResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
