import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import styles from './Styles';
import {Bell} from '../../constants/SvgPath';
import CustomCategoryButton from '../../components/CustomCategoryButton';
import data from '../../constants/Data';
import _ from 'lodash';
import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {auth} from '../../config/FirebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTheme from '../../constants/CustomTheme';
import messaging from '@react-native-firebase/messaging';
import Color from '../../constants/Color';

const HomeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [name, setName] = useState(route.params?.name ?? '');
  const [greeting, setGreeting] = useState('');
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);
  const [notificationColor, setNotificationColor] = useState('#ff0000');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      setUnreadMessagesCount(prevCount => prevCount + 1);
      setNotificationColor('#ff0000');

      handleMessage(remoteMessage);
    });

    return unsubscribe;
  }, []);

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const displayName = user.displayName || user.email.split('@')[0];
        setName(displayName.charAt(0).toUpperCase() + displayName.slice(1));
        AsyncStorage.setItem('name', displayName);
      } else {
        const googleName = route.params?.userGoogleInfo?.user?.name ?? '';
        if (googleName) {
          setName(googleName.charAt(0).toUpperCase() + googleName.slice(1));
          AsyncStorage.setItem('name', googleName);
        }
      }
    });

    return unsubscribe;
  }, [route.params]);

  useEffect(() => {
    const GetCurrentGreeting = () => {
      let today = new Date();
      let currentHour = today.getHours();

      if (currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };
    GetCurrentGreeting();
  }, []);

  const filterData = searchText => {
    const formattedSearchValue = searchText.toLowerCase().trim();

    const filteredData = data.filter(item =>
      item.type.toLowerCase().includes(formattedSearchValue),
    );

    setFilteredData(filteredData);
  };

  const handleInputWithDebounce = text => {
    setSearchValue(text);
    if (text.length >= 2) {
      filterData(text);
    } else {
      setFilteredData(data);
    }
  };

  const handleClearSearch = () => {
    setSearchValue('');
    setFilteredData(data);
  };

  const handleSearch = () => {
    const formattedSearchValue = searchValue.toLowerCase();

    if (!searchValue.trim()) {
      setFilteredData(data);
      return;
    }

    const filteredData = _.filter(data, item => {
      return (
        item.type && item.type.toLowerCase().includes(formattedSearchValue)
      );
    });

    setFilteredData(filteredData);

    navigation.navigate(NavigationStringPath.RESULTSCREEN, {
      searchValue: formattedSearchValue,
      filteredData: filteredData,
    });
  };

  const handleInputChange = text => {
    setSearchValue(text);
  };

  const getUniqueCategories = () => {
    const uniqueCategories = [...new Set(data.map(item => item.type))];
    return uniqueCategories;
  };

  const handleCategoryPress = category => {
    const filteredCategoryData = data.filter(
      item => item.type.toLowerCase() === category.toLowerCase(),
    );
    navigation.navigate(NavigationStringPath.RESULTSCREEN, {
      searchValue: category,
      filteredData: filteredCategoryData,
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate(NavigationStringPath.PRODUCTSCREEN, {
            item,
            price: filteredData[0].Price,
            userGoogleInfo: route.params?.userGoogleInfo,
            name,
          })
        }>
        <View
          style={[
            styles.renderMainView,
            {
              backgroundColor: darkBackgroundColor,
              borderColor: darkBorderColor,
            },
          ]}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={[
                styles.renderItemImage,
                {
                  marginVertical: moderateVerticalScale(16),
                  borderRadius: moderateScale(20),
                },
              ]}
            />
            <View style={styles.renderTouchableOpacity}>
              <Text style={[styles.renderTouchableText, {color: Color.WHITE}]}>
                ₹ {item.Price}
              </Text>
            </View>
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

  const handleMessage = remoteMessage => {
    const {data, notification} = remoteMessage;
    const messageBody = notification ? notification.body : data.body;
    setNotificationMessage(messageBody);
  };

  const handleBellIconPress = () => {
    setIsModalVisible(true);
    setUnreadMessagesCount(0);
  };

  const modalContent = (
    <View style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
        <View style={styles.modalContent}>
          <Text style={styles.notificationMessage}>{notificationMessage}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        {modalContent}
      </Modal>
      <SafeAreaView
        style={[styles.subContainer, {backgroundColor: darkBackgroundColor}]}>
        <View style={styles.marginContainer}>
          <View
            style={[
              styles.topHeaderView,
              {backgroundColor: darkBackgroundColor},
            ]}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <Text style={[styles.helloTextStyle, {color: darkmodeColor}]}>
                {greeting}
              </Text>

              <Text style={[styles.userTextStyle, {color: darkmodeColor}]}>
                {name}
              </Text>
            </View>
            <View
              style={[
                styles.notificationView,
                {
                  backgroundColor: darkBackgroundColor,
                  borderColor: darkBorderColor,
                },
              ]}>
              <TouchableOpacity
                onPress={() => setUnreadMessagesCount(0)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{position: 'relative'}}>
                  <Bell
                    width={moderateScale(24)}
                    height={moderateScale(24)}
                    fill={darkmodeColor}
                  />
                  {unreadMessagesCount > 0 && (
                    <View
                      style={[
                        styles.notificationBadge,
                        {
                          backgroundColor: 'red',
                          position: 'absolute',
                          top: moderateVerticalScale(-8),
                          right: moderateScale(-8),
                          zIndex: 1,
                          borderRadius: moderateScale(10),
                          paddingHorizontal: moderateScale(6),
                          paddingVertical: moderateVerticalScale(2),
                        },
                      ]}>
                      <Text
                        style={[
                          styles.notificationBadgeText,
                          {fontWeight: 'bold'},
                        ]}>
                        {unreadMessagesCount}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              {
                backgroundColor: darkBackgroundColor,
                borderColor: darkBorderColor,
              },
            ]}>
            <View
              style={[
                styles.searchView,
                {backgroundColor: darkBackgroundColor},
              ]}>
              <CustomSearch
                inputStyle={{
                  width: '90%',
                  paddingHorizontal: moderateScale(16),
                }}
                placeholder="Search"
                placeholderTextColor={darkmodeColor}
                onChangeText={handleInputWithDebounce}
                value={searchValue}
                rightIcon={'search-outline'}
                onPressRight={handleSearch}
                onPressClear={handleClearSearch}
                onSubmitEditing={() => {
                  handleSearch();
                }}
              />
            </View>
            <View
              style={[
                styles.categoryView,
                {backgroundColor: darkBackgroundColor},
              ]}>
              <Text style={[styles.categoryTextStyle, {color: darkmodeColor}]}>
                Category :
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {getUniqueCategories().map(category => (
                  <CustomCategoryButton
                    key={category}
                    text={`#${category}`}
                    onPress={() => handleCategoryPress(category)}
                  />
                ))}
              </ScrollView>
            </View>
            <View
              style={{
                backgroundColor: darkBackgroundColor,
                borderColor: darkBorderColor,
              }}>
              <FlatList
                data={filteredData}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: moderateScale(350),
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
