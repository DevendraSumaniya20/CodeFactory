import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import styles from './Styles';
import {BellIcon} from '../../constants/SvgPath';
import CustomCategoryButton from '../../components/CustomCategoryButton';
import data from '../../constants/Data';
import {moderateScaleVertical} from '../../constants/responsiveSize';

import _ from 'lodash';
import {useNavigation} from '@react-navigation/native';
import NavigationStringPath from '../../constants/NavigationStringPath';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = text => {
    setSearchValue(text);
    const formattedSearchValue = text.toLowerCase();

    const filteredData = _.filter(data, item => {
      return item.type.toLowerCase().includes(formattedSearchValue);
    });

    setFilteredData(filteredData);

    navigation.navigate(NavigationStringPath.RESULTSCREEN, {
      searchValue: formattedSearchValue,
    });
  };

  const renderItem = ({item}) => {
    return (
      <>
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
                <Text style={styles.renderTouchableText}>{item.Price}</Text>
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
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.subContainer}>
          <View style={styles.marginContainer}>
            <View style={styles.topHeaderView}>
              <View
                style={{
                  alignItems: 'flex-start',
                }}>
                <Text style={styles.helloTextStyle}>Hello,</Text>

                <Text style={styles.userTextStyle}>Juana Antonieta</Text>
              </View>

              <View style={styles.notificationView}>
                <BellIcon
                  width={moderateScale(24)}
                  height={moderateScale(24)}
                />
              </View>
            </View>
            <View style={{marginTop: moderateScale(12)}}>
              <CustomSearch
                inputStyle={{width: '90%', padding: moderateScale(16)}}
                placeholder="Search"
                onChangeText={handleSearch}
                value={searchValue}
                rightIcon={'search-outline'}
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
    </>
  );
};

export default HomeScreen;
