import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Styles';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {NotSavedSvg} from '../../constants/SvgPath';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomButton from '../../components/CustomButton';
import {getData} from '../../utils/AsyncStorage';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomTheme from '../../constants/CustomTheme';

const CourseSavedScreen = ({route}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const {addedCourses} = route.params || {addedCourses: []};

  const [storedCourses, setStoredCourses] = useState([]);
  const [courseAvailable, setCourseAvailable] = useState(
    addedCourses.length > 0,
  );

  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();

  useEffect(() => {
    const retrieveStoredCourses = async () => {
      const storedData = await getData('savedCourses');
      if (storedData) {
        setStoredCourses(JSON.parse(storedData));
      }
    };
    retrieveStoredCourses();
  }, [isFocused]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate(NavigationStringPath.PRODUCTSCREEN, {item: item});
        }}>
        <View
          style={[
            styles.renderMainView,
            {
              backgroundColor: darkBackgroundColor,
              borderColor: darkBorderColor,
            },
          ]}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: moderateVerticalScale(16),
            }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={styles.renderItemImage}
            />
          </View>

          <View
            style={[
              styles.renderSecondView,
              {backgroundColor: darkBackgroundColor},
            ]}>
            <Text style={styles.renderDurationText}>{item.duration}</Text>
            <Text style={[styles.renderTypeText, {color: darkmodeColor}]}>
              {item.type}
            </Text>
            <Text
              style={[styles.renderOtherDetailsText, {color: darkmodeColor}]}>
              {item.otherDetails}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.marginContainer}>
          <CustomHeader
            iconName={'chevron-back'}
            onPress={() => {
              navigation.goBack();
            }}
            text={'Saved Courses'}
          />

          <View style={[{backgroundColor: darkBackgroundColor}]}>
            {storedCourses.length > 0 ? (
              <FlatList
                data={storedCourses}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: moderateScale(350),
                }}
              />
            ) : (
              <>
                <View style={styles.imageView}>
                  <NotSavedSvg />
                </View>
                <View style={styles.welcomeTextView}>
                  <CustomWelcomeText
                    text={' Course not saved'}
                    fontFamily="Rubik-Regular"
                    fontSize={scale(24)}
                    letterSpacing={-0.5}
                    lineHeight={32}
                  />
                </View>
                <View style={styles.descriptionTextView}>
                  <CustomDescriptionText
                    fontsize={scale(14)}
                    lineHeight={21}
                    fontFamily="Rubik-Regular"
                    fontWeight="400"
                    text={'Try saving the course  '}
                  />
                  <CustomDescriptionText
                    fontsize={scale(14)}
                    lineHeight={21}
                    fontFamily="Rubik-Regular"
                    fontWeight="400"
                    text={'after you will see Courses  '}
                  />
                </View>

                <View style={styles.continueToubleView}>
                  <CustomButton
                    text={'Save Course'}
                    onPress={() => {
                      navigation.navigate(NavigationStringPath.HOMESCREEN);
                    }}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CourseSavedScreen;
