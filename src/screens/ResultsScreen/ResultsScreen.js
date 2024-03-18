import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import styles from './Styles';
import data from '../../constants/Data';
import {moderateScaleVertical} from '../../constants/responsiveSize';
import _ from 'lodash';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomIcon from '../../components/CustomIcon';
import NavigationStringPath from '../../constants/NavigationStringPath';
import CustomTheme from '../../constants/CustomTheme';

const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [resultCount, setResultCount] = useState(data.length);

  const routeSearchValue = route.params?.searchValue || '';
  // const routeFilteredData = route.params?.filteredData || [];

  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();

  useEffect(() => {
    handleSearch(routeSearchValue);
  }, [routeSearchValue]);

  const handleSearch = text => {
    setSearchValue(text);
    const formattedSearchValue = text.toLowerCase();

    if (!text.trim()) {
      setFilteredData(data);
      setResultCount(data.length);
      return;
    }

    const filteredData = _.filter(data, item => {
      return item.type.toLowerCase().includes(formattedSearchValue);
    });

    setFilteredData(filteredData);
    setResultCount(filteredData.length);
  };

  const handleBackToHome = () => {
    navigation.navigate(NavigationStringPath.HOMESCREEN);
  };

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
            <TouchableOpacity
              style={styles.renderTouchableOpacity}
              onPress={() => {
                navigation.navigate(NavigationStringPath.PRODUCTSCREEN, {
                  item,
                });
              }}>
              <Text
                style={[styles.renderTouchableText, {color: darkmodeColor}]}>
                ₹ {item.Price}
              </Text>
            </TouchableOpacity>
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

  const renderHeader = () => {
    return (
      <View
        style={[
          styles.resultContainer,
          {backgroundColor: darkBackgroundColor},
        ]}>
        <Text style={[styles.resultText, {color: darkmodeColor}]}>
          {resultCount} Results
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: darkBackgroundColor}]}>
      <SafeAreaView
        style={[styles.subContainer, {backgroundColor: darkBackgroundColor}]}>
        <View style={styles.marginContainer}>
          <View style={{marginTop: moderateScale(12)}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginVertical: moderateVerticalScale(8),
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 50,
                  width: moderateScale(46),
                  height: moderateScale(46),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: darkBorderColor,
                }}
                onPress={handleBackToHome}>
                <CustomIcon name={'chevron-back'} color={darkmodeColor} />
              </TouchableOpacity>

              <View
                style={{
                  backgroundColor: darkBackgroundColor,
                  borderColor: darkBorderColor,
                  borderRadius: moderateScale(16),
                  marginLeft: moderateScale(10),
                }}>
                <CustomSearch
                  inputStyle={{
                    width: '80%',
                    paddingHorizontal: moderateScale(16),
                  }}
                  placeholder="Search Your Fav Course"
                  placeholderTextColor={darkmodeColor}
                  onChangeText={handleSearch}
                  value={searchValue}
                  rightIcon={'search-outline'}
                />
              </View>
            </View>
          </View>

          <View style={[{backgroundColor: darkBackgroundColor}]}>
            {renderHeader()}
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
      </SafeAreaView>
    </View>
  );
};

export default ResultsScreen;
