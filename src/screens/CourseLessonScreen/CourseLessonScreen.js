import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CourseLessonScreen = ({route}) => {
  const {selectedCourse} = route.params;

  console.log('........................>>>>>>', selectedCourse);
  return (
    <View>
      <Text>CourseLessonScreen</Text>
    </View>
  );
};

export default CourseLessonScreen;

const styles = StyleSheet.create({});
