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
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import styles from './Styles';
import {BellIcon} from '../../constants/SvgPath';
import CustomCategoryButton from '../../components/CustomCategoryButton';
import data from '../../constants/Data';
import {moderateScaleVertical} from '../../constants/responsiveSize';
import _ from 'lodash';
import {useNavigation, useRoute} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';
import {auth} from '../../config/FirebaseAuth';

const HomeScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [name, setName] = useState(route.params?.name ?? '');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User logged in:', JSON.stringify(user));
        setName(user.email || 'Anonymous');
      } else {
        console.log('User logged out');
        setName('');
      }
    });

    return () => unsubscribe();
  }, []);

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

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate(NavigationStringPath.PRODUCTSCREEN, {
            item,
            price: filteredData[0].Price,
          })
        }>
        <View style={styles.renderMainView}>
          <View
            style={{
              height: moderateScaleVertical(194),
              paddingTop: moderateScale(8),
              backgroundColor: item.backgroundColor,
              borderRadius: moderateScale(8),
            }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={styles.renderItemImage}
            />

            <View>
              <TouchableOpacity
                style={styles.renderTouchableOpacity}
                onPress={() => {
                  navigation.navigate(NavigationStringPath.PRODUCTSCREEN, {
                    item,
                  });
                }}>
                <Text style={styles.renderTouchableText}> ₹ {item.Price}</Text>
              </TouchableOpacity>
            </View>
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
          <View style={styles.topHeaderView}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <Text style={styles.helloTextStyle}>Hello,</Text>
              <Text style={styles.userTextStyle}>{name}</Text>
            </View>
            <View style={styles.notificationView}>
              <BellIcon width={moderateScale(24)} height={moderateScale(24)} />
            </View>
          </View>
          <View style={{marginTop: moderateScale(12)}}>
            <CustomSearch
              inputStyle={{width: '90%', padding: moderateScale(16)}}
              placeholder="Search"
              onChangeText={handleInputChange}
              value={searchValue}
              rightIcon={'search-outline'}
              onPressRight={handleSearch}
            />
          </View>
          <View style={styles.categoryView}>
            <Text style={styles.categoryTextStyle}>Category :</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CustomCategoryButton text={'#CSS'} />
              <CustomCategoryButton text={'#UX'} />
              <CustomCategoryButton text={'#Swift'} />
              <CustomCategoryButton text={'#UI'} />
            </ScrollView>
          </View>
          <View style={{backgroundColor: '#FFF'}}>
            <FlatList
              data={data}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: moderateScale(350),
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
