import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
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
import {storeData, getData} from '../../utils/AsyncStorage';
import {Heart, HeartFill} from '../../constants/SvgPath';
import RazorpayCheckout from 'react-native-razorpay';
import {APIKey} from '../../config/APIKey';

import NavigationStringPath from '../../constants/NavigationStringPath';

const ProductScreen = ({route}) => {
  const [storedCourses, setStoredCourses] = useState([]);
  const [like, setLike] = useState(false);

  const {item} = route.params || {};
  const navigation = useNavigation();

  const {userGoogleInfo, name} = route.params;

  useEffect(() => {
    const isLiked = storedCourses.some(course => course.id === item.id);
    setLike(isLiked);
  }, [storedCourses, item]);

  const onClickLike = async () => {
    if (!like) {
      Alert.alert('Item added to Saved Courses');
      setLike(true);
      try {
        await storeData(
          'savedCourses',
          JSON.stringify([...storedCourses, item]),
        );
      } catch (error) {
        console.error('Error adding course to saved courses:', error);
      }
    } else {
      Alert.alert('Item removed from Saved Courses');
      setLike(false);
      try {
        const updatedCourses = storedCourses.filter(
          course => course.id !== item.id,
        );
        await storeData('savedCourses', JSON.stringify(updatedCourses));
      } catch (error) {
        console.error('Error removing course from saved courses:', error);
      }
    }
  };

  const addToCart = async () => {
    try {
      const existingCourses = await getData('purchaseCourse');
      let updatedCourses = [];

      if (existingCourses) {
        updatedCourses = JSON.parse(existingCourses);

        const isAlreadyPurchased = updatedCourses.some(
          course => course.id === item.id,
        );
        if (isAlreadyPurchased) {
          Alert.alert(
            'Already Purchased',
            'You have already purchased this course.',
          );
          return;
        }
      }

      let options = {
        description: `Purchase of ${item.type}`,
        image: require('../../assets/images/Logo1.png'),
        currency: 'INR',
        key: APIKey,
        amount: item.Price * 100,
        name: name,
        order_id: '',
        prefill: {
          email: 'gaurav.kumar@example.com',
          contact: '9191919191',
          name: name,
        },
        theme: {color: Color.THEMECOLOR},
      };

      RazorpayCheckout.open(options)
        .then(async data => {
          Alert.alert(
            // `Your Course Purchase is Success:
            //   ${data.razorpay_payment_id}
            //  `,
            'Your Cousre is successfully Purchase you can check in Your Course',
          );

          setTimeout(() => {
            updatedCourses.push(item);
            storeData('purchaseCourse', JSON.stringify(updatedCourses));
            navigation.navigate(NavigationStringPath.YOUR_COURSESSCREEN, {
              item,
            });
          }, 3000);
        })
        .catch(error => {
          Alert.alert(`Error: ${error.code} | ${error.description}`);
          console.log(error.description);
        });
    } catch (error) {
      Alert.alert(`Error: ${error.message}`);
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
                paddingTop: moderateVerticalScale(8),
                borderRadius: moderateScale(8),
              }}>
              <Image
                source={item.image}
                resizeMode="contain"
                resizeMethod="auto"
                style={styles.renderItemImage}
              />

              <TouchableOpacity style={styles.renderTouchableOpacity}>
                <Text style={styles.renderTouchableText}> ₹ {item.Price}</Text>
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
          <View
            style={{
              marginVertical: moderateVerticalScale(16),
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: moderateScale(6),
            }}>
            <CustomButton
              inlineStyle={{
                width: moderateScale(290),
              }}
              text={'Add to cart'}
              onPress={() => {
                addToCart();
              }}
            />

            <TouchableOpacity
              onPress={() => {
                onClickLike();
              }}
              style={{
                borderRadius: moderateScale(6),
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: Color.GRAY,
                borderWidth: 1,
                padding: moderateScale(6),
                marginLeft: moderateScale(12),
              }}>
              {like ? (
                <>
                  <HeartFill height={30} width={30} fill={Color.THEMECOLOR} />
                </>
              ) : (
                <>
                  <Heart height={30} width={30} fill={'#000'} />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;
