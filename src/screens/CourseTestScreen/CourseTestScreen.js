import React, {useState, useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTheme from '../../constants/CustomTheme';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {useNavigation} from '@react-navigation/native';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import styles from './Styles';
import CustomButton from '../../components/CustomButton';

const CourseTestScreen = ({route}) => {
  const {topicName, questions, selectedCourse, resetQuiz} = route.params || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);
  const navigation = useNavigation();
  const {darkmodeColor, darkBackgroundColor, darkBorderColor} = CustomTheme();

  useEffect(() => {
    if (resetQuiz) {
      resetQuizState();
    }
  }, [resetQuiz]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          handleTimeUp();
          return 15;
        } else if (prevTimer === 5 && selectedAnswer === null) {
          Alert.alert(
            'No Answer Selected',
            'Please select an answer before continuing.',
          );
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex, selectedAnswer]);

  const resetQuizState = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);

    setTimer(15);
    setScore(0);
  };

  const handleAnswerSelection = optionIndex => setSelectedAnswer(optionIndex);

  const handleContinue = () => {
    if (selectedAnswer !== null) {
      const isCorrectAnswer =
        selectedAnswer === questions[currentQuestionIndex].correctAnswerIndex;
      const updatedScore = isCorrectAnswer ? score + 10 : 0;
      setScore(updatedScore);
      moveToNextQuestion();
    } else {
      Alert.alert(
        'No Answer Selected',
        'Please select an answer before continuing.',
      );
    }
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);

      setTimer(15);
    } else {
      navigateToResultScreen();
    }
  };

  const handleTimeUp = () => {
    if (currentQuestionIndex < questions.length - 1) {
      moveToNextQuestion();
    } else {
      navigateToResultScreen();
    }
  };

  const navigateToResultScreen = () => {
    navigation.navigate(NavigationStringPath.COURSE_RESULTSCREEN, {
      totalScore: calculateTotalScore(),
      totalQuestions: questions.length,
      selectedCourse: {...selectedCourse},
      topicName,
      questions,
    });
  };

  const calculateTotalScore = () => {
    let total = 0;
    questions.forEach(question => {
      if (question.correctAnswerIndex === selectedAnswer) {
        total += 10;
      }
    });
    return total;
  };

  const renderOptions = options => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.option,
          {borderColor: darkBorderColor},
          selectedAnswer === index && styles.selectedOption,
        ]}
        onPress={() => handleAnswerSelection(index)}>
        <Text style={[styles.optionText, {color: darkmodeColor}]}>
          {option.option} . {option.answer}
        </Text>
      </TouchableOpacity>
    ));
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const questionNumber = currentQuestionIndex + 1;

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: darkBackgroundColor}}
      contentContainerStyle={{paddingBottom: moderateVerticalScale(100)}}
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: scale(24),
                  fontWeight: '500',
                  textTransform: 'capitalize',
                  color: darkmodeColor,
                  marginTop: moderateVerticalScale(16),
                  marginBottom: moderateVerticalScale(8),
                }}>
                {topicName}
              </Text>

              <View
                style={{
                  backgroundColor: darkBackgroundColor,
                  height: 8,
                  width: '100%',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    backgroundColor: '#007AFF',
                    height: '100%',
                    width: `${progress}%`,
                  }}
                />
              </View>

              <Text style={[styles.questionNumber, {color: darkmodeColor}]}>
                Question {questionNumber}/{questions.length}
              </Text>

              <View style={styles.timerContainer}>
                <Text style={[styles.timer, {color: darkmodeColor}]}>
                  {timer}
                </Text>
              </View>
              <Text style={[styles.scoreText, {color: darkmodeColor}]}>
                Score: {score}
              </Text>
            </View>
            <View
              style={[
                styles.questionContainer,
                {backgroundColor: darkBackgroundColor},
              ]}>
              <Text
                style={[
                  styles.question,
                  currentQuestionIndex === questions.length - 1 &&
                    styles.lastQuestionText,
                  {color: darkmodeColor},
                ]}>
                {questions[currentQuestionIndex]?.question}
              </Text>
            </View>

            <View
              style={[
                styles.optionsContainer,
                {backgroundColor: darkBackgroundColor},
              ]}>
              {questions[currentQuestionIndex]?.options &&
                renderOptions(questions[currentQuestionIndex]?.options)}
            </View>

            <CustomButton
              text={'Continue'}
              onPress={handleContinue}
              inlineStyle={styles.continueButtonContainer}
            />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default CourseTestScreen;
