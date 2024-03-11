import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CourseTestScreen = ({route}) => {
  const {selectedCourse, topicName, questions} = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Course Test: {topicName}</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          {question.options.map(option => (
            <Text key={option.id} style={styles.option}>
              {option.option}.{option.answer}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 24,
    marginBottom: 10,
  },
  option: {
    fontSize: 26,
  },
});

export default CourseTestScreen;
