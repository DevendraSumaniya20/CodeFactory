import React, {useState, useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
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
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);
  const navigation = useNavigation();
  const {darkmodeColor, darkBackgroundColor, darkBorderColor} = CustomTheme();

  useEffect(() => {
    if (resetQuiz) {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setTimer(10);
      setScore(0);
    }
  }, [resetQuiz]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval);
          handleTimeUp();
          return 10;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  const handleAnswerSelection = optionIndex => setSelectedAnswer(optionIndex);

  const handleContinue = () => {
    if (selectedAnswer !== null) {
      const correctAnswerIndex =
        questions[currentQuestionIndex].correctAnswerIndex;
      if (selectedAnswer === correctAnswerIndex) {
        setScore(prevScore => prevScore + 10);
        console.log('Correct Answer! Score:', score + 10);
      } else {
        setScore(0);
        console.log('Incorrect Answer! Score: 0');
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        navigation.navigate(NavigationStringPath.COURSE_RESULTSCREEN, {
          totalScore: calculateTotalScore(),
          selectedCourse,
          topicName,
          totalQuestions: questions.length,
          questions: questions,
        });
      }
      setTimer(10);
    } else {
      Alert.alert(
        'No Answer Selected',
        'Please select an answer before continuing.',
      );
    }
  };

  const handleTimeUp = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setTimer(10);
    } else {
      setTimeout(() => {
        navigation.navigate(NavigationStringPath.COURSE_RESULTSCREEN, {
          totalScore: calculateTotalScore(),
          totalQuestions: questions.length,
        });
      }, 0);
    }
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
          {backgroundColor: darkBackgroundColor, borderColor: darkBorderColor},
          styles.option,
          selectedAnswer === index && styles.selectedOption,
        ]}
        onPress={() => handleAnswerSelection(index)}>
        <Text style={[styles.optionText, {color: darkmodeColor}]}>
          {option.option} - {option.answer}
        </Text>
      </TouchableOpacity>
    ));
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const questionNumber = currentQuestionIndex + 1;

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: darkBackgroundColor}}
      contentContainerStyle={{
        paddingBottom: moderateVerticalScale(400),
      }}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}>
      <View style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
        <SafeAreaView style={styles.subContainer}>
          <View style={styles.marginContainer}>
            <CustomHeader
              iconName={'chevron-back'}
              onPress={() => {
                navigation.goBack();
              }}
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
                style={[
                  styles.progressBar,
                  {backgroundColor: darkBackgroundColor},
                ]}>
                <View
                  style={{
                    width: `${progress}%`,
                    backgroundColor: '#007AFF',
                    height: 8,
                  }}
                />
              </View>

              <Text style={[styles.questionNumber, {color: darkmodeColor}]}>
                Question {questionNumber}/{questions.length}
              </Text>
              <View
                style={[
                  styles.timerContainer,
                  {
                    backgroundColor: darkBackgroundColor,
                    borderColor: darkBorderColor,
                  },
                ]}>
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
                {
                  backgroundColor: darkBackgroundColor,
                  borderColor: darkBorderColor,
                },
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
              onPress={() => {
                handleContinue();
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default CourseTestScreen;
