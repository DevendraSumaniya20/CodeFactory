import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import Color from '../../constants/Color';
import styles from './Styles';
import {BellIcon} from '../../constants/SvgPath';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import CustomWelcomeText from '../../components/CustomWelcomeText';
import CustomButton from '../../components/CustomButton';
import {moderateScaleVertical} from '../../constants/responsiveSize';
import CustomCategoryButton from '../../components/CustomCategoryButton';

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

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.subContainer}>
          <View style={styles.marginContainer}>
            <View style={styles.topHeaderView}>
              <View style={{alignItems: 'flex-start'}}>
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
            <CustomSearch
              inputStyle={{width: '90%', padding: moderateScale(16)}}
              placeholder="Search"
              onChangeText={handleSearch}
              value={searchValue}
              rightIcon={!showSuggestions ? 'search-outline' : ''}
              onPressRight={() => {}}
            />
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
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 16,
                marginHorizontal: moderateScale(16),
                marginTop: moderateVerticalScale(12),
              }}>
              <Text
                style={{
                  fontFamily: 'Rubik-Regular',
                  fontSize: scale(14),
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 21,
                }}>
                Category :
              </Text>
              <CustomCategoryButton text={'#CSS'} />
              <CustomCategoryButton text={'#UX'} />
              <CustomCategoryButton text={'#Swift'} />
              <CustomCategoryButton text={'#UI'} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default HomeScreen;
