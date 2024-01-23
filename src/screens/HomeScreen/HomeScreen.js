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
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import styles from './Styles';
import {BellIcon, CoolKid} from '../../constants/SvgPath';
import CustomCategoryButton from '../../components/CustomCategoryButton';
import data from '../../constants/Data';
import {moderateScaleVertical} from '../../constants/responsiveSize';
import Color from '../../constants/Color';

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = text => {
    setSearchValue(text);

    const predefinedSuggestions = ['Apple', 'Banana', 'Cherry', 'Date'];
    const filteredSuggestions = predefinedSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(text.toLowerCase()),
    );

    setSuggestions(filteredSuggestions);
    setShowSuggestions(filteredSuggestions.length > 0);
  };

  const handleSuggestionPress = suggestion => {
    setSearchValue(suggestion);
    setShowSuggestions(false);
  };

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity activeOpacity={0.5}>
          <View
            style={{
              justifyContent: 'center',
              borderWidth: 0.8,
              marginVertical: moderateVerticalScale(8),
              borderRadius: moderateScale(8),
            }}>
            <View style={{justifyContent: 'center'}}>
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
                  style={{
                    height: moderateScale(138),
                    width: moderateScale(343),
                  }}
                />

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    backgroundColor: Color.BLUE,
                    borderRadius: moderateScale(20),
                    paddingHorizontal: moderateScale(16),
                    paddingVertical: moderateScale(8),
                    marginLeft: moderateScale(260),
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Rubik-Regular',
                      fontSize: scale(14),
                      fontWeight: '500',
                      lineHeight: 16,
                      textAlign: 'right',
                      color: Color.WHITE,
                    }}>
                    {item.Price}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginHorizontal: moderateScale(16),
                  marginTop: moderateVerticalScale(16),
                  marginBottom: moderateVerticalScale(8),
                }}>
                <Text
                  style={{
                    color: Color.LIGHTGREEEN,
                    fontSize: scale(12),
                    fontWeight: '500',
                    fontFamily: 'Rubik-Bold',
                    marginBottom: moderateVerticalScale(4),
                  }}>
                  {item.duration}
                </Text>
                <Text
                  style={{
                    fontSize: scale(24),
                    fontWeight: '500',
                    fontFamily: 'Rubik-Bold',
                    letterSpacing: -0.5,
                    lineHeight: 32,
                  }}>
                  {item.type}
                </Text>
                <Text
                  style={{
                    fontSize: scale(14),
                    fontWeight: '400',
                    fontFamily: 'Rubik-Regular',
                    lineHeight: 21,
                    color: Color.BLACK,
                  }}>
                  {item.otherDetails}
                </Text>
              </View>
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
                rightIcon={!showSuggestions ? 'search-outline' : ''}
                onPressRight={() => {}}
              />
            </View>
            {/* {showSuggestions && searchValue !== '' ? (
              <FlatList
                data={suggestions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => handleSuggestionPress(item)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <View>
                <Text>No results found</Text>
              </View>
            )} */}

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
    </>
  );
};

export default HomeScreen;
