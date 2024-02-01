import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import styles from './Styles';
import data from '../../constants/Data';
import {moderateScaleVertical} from '../../constants/responsiveSize';
import _ from 'lodash';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomIcon from '../../components/CustomIcon';
import NavigationStringPath from '../../constants/NavigationStringPath';

const ResultsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [resultCount, setResultCount] = useState(data.length);

  const routeSearchValue = route.params?.searchValue || '';
  const routeFilteredData = route.params?.filteredData || [];

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
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.renderMainView}>
          <View
            style={{
              alignItems: 'flex-start',
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

            <TouchableOpacity style={styles.renderTouchableOpacity}>
              <Text style={styles.renderTouchableText}>₹ {item.Price}</Text>
            </TouchableOpacity>
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

  const renderHeader = () => {
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}> {resultCount} Results</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.marginContainer}>
          <View style={{marginTop: moderateScale(12)}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 50,
                  width: moderateScale(48),
                  height: moderateScale(48),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={handleBackToHome}>
                <CustomIcon name={'chevron-back'} size={16} />
              </TouchableOpacity>
              <View style={{marginLeft: moderateScale(8)}} />
              <CustomSearch
                inputStyle={{
                  width: moderateScale(270),
                  padding: moderateScale(16),
                }}
                placeholder="Search Your Favorite Course"
                onChangeText={handleSearch}
                value={searchValue}
                rightIcon={'search-outline'}
              />
            </View>
          </View>

          <View style={{backgroundColor: '#FFF'}}>
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
