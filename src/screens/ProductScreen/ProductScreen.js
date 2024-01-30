import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './Styles';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomHeader from '../../components/CustomHeader';
import Color from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomButton from '../../components/CustomButton';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {storeData, getData} from '../../utils/AsyncStorage';

const ProductScreen = ({route}) => {
  const [storedCourses, setStoredCourses] = useState([]);

  const {item} = route.params;
  const navigation = useNavigation();

  const addToCart = async () => {
    try {
      await storeData('savedCourses', JSON.stringify([...storedCourses, item]));

      navigation.navigate(NavigationStringPath.YOUR_COURSESSCREEN, {
        addedCourses: [...storedCourses, item],
      });
    } catch (error) {
      console.error('Error adding course to cart:', error);
    }
  };

  useEffect(() => {
    const retrieveStoredCourses = async () => {
      const storedData = await getData('savedCourses');
      if (storedData) {
        setStoredCourses(JSON.parse(storedData));
      }
    };
    retrieveStoredCourses();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.marginContainer}>
          <View>
            <CustomHeader
              iconName={'chevron-back'}
              size={16}
              color={Color.BLACK}
              onPress={() => {
                navigation.goBack();
              }}
              text={item.type}
            />
          </View>
          <View style={styles.renderMainView}>
            <View
              style={{
                alignItems: 'flex-start',
                paddingTop: moderateScale(8),
                backgroundColor: item.backgroundColor,
                borderRadius: moderateScale(8),
              }}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.renderItemImage}
              />

              <TouchableOpacity style={styles.renderTouchableOpacity}>
                <Text style={styles.renderTouchableText}>{item.Price}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignItems: 'flex-start',
                marginHorizontal: moderateScale(16),
                marginTop: moderateVerticalScale(16),
              }}>
              <CustomWelcomeText
                text={'About the Course'}
                color={Color.BLACK}
                letterSpacing={-0.5}
                lineHeight={32}
                fontSize={scale(24)}
                fontFamily="Rubik-Regular"
                fontWeight="500"
              />

              <View style={styles.renderSecondView}>
                <Text style={styles.renderOtherDetailsText}>
                  {item.aboutCourseDetails}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              marginHorizontal: moderateScale(16),
              marginVertical: moderateVerticalScale(16),
            }}>
            <CustomWelcomeText
              text={'Duration'}
              color={Color.BLACK}
              letterSpacing={-0.5}
              lineHeight={26}
              fontSize={scale(20)}
              fontFamily="Rubik-Regular"
              fontWeight="500"
            />

            <Text style={styles.renderDurationText}>{item.duration}</Text>
          </View>
          <View style={{marginVertical: moderateVerticalScale(21)}}>
            <CustomButton
              text={'Add to cart'}
              onPress={() => {
                addToCart();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;
