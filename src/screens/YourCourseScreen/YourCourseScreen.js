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
import {useNavigation} from '@react-navigation/native';
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

const YourCourseScreen = ({route}) => {
  const navigation = useNavigation();
  const {addedCourses} = route.params || {addedCourses: []};

  const [storedCourses, setStoredCourses] = useState([]);
  const [courseAvailable, setCourseAvailable] = useState(
    addedCourses.length > 0,
  );

  useEffect(() => {
    const retrieveStoredCourses = async () => {
      const storedData = await getData('purchaseCourse');
      if (storedData) {
        setStoredCourses(JSON.parse(storedData));
      }
    };
    retrieveStoredCourses();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
        <View style={styles.renderMainView}>
          <View
            style={{
              alignItems: 'flex-start',
              height: moderateVerticalScale(194),
              paddingTop: moderateScale(8),
              backgroundColor: item.backgroundColor,
              borderRadius: moderateScale(8),
            }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={styles.renderItemImage}
            />
          </View>

          <View style={styles.renderSecondView}>
            <Text style={styles.renderDurationText}>{item.duration}</Text>
            <Text style={styles.renderTypeText}>{item.type}</Text>
            <Text style={styles.renderOtherDetailsText}>
              {item.otherDetails}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.marginContainer}>
          <CustomHeader
            iconName={'chevron-back'}
            size={24}
            color={Color.BLACK}
            onPress={() => {
              navigation.goBack();
            }}
            text={'Saved'}
          />

          <View style={{backgroundColor: '#FFF'}}>
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
                    color={Color.BLACK}
                  />
                </View>
                <View style={styles.descriptionTextView}>
                  <CustomDescriptionText
                    fontsize={scale(14)}
                    lineHeight={21}
                    color={Color.GRAY}
                    fontFamily="Rubik-Regular"
                    fontWeight="400"
                    text={'Try saving the course  '}
                  />
                  <CustomDescriptionText
                    fontsize={scale(14)}
                    lineHeight={21}
                    color={Color.GRAY}
                    fontFamily="Rubik-Regular"
                    fontWeight="400"
                    text={'again in a few minutes '}
                  />
                </View>

                <View style={styles.continueToubleView}>
                  <CustomButton text={'Save Course'} onPress={() => {}} />
                </View>
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default YourCourseScreen;
