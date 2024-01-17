import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import styles from './Styles';
import {BellIcon, CoolKid} from '../../constants/SvgPath';
import CustomCategoryButton from '../../components/CustomCategoryButton';
import CustomSvg from '../../components/CustomSvg';

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

          <View style={styles.categoryView}>
            <Text style={styles.categoryTextStyle}>Category :</Text>
            <CustomCategoryButton text={'#CSS'} />
            <CustomCategoryButton text={'#UX'} />
            <CustomCategoryButton text={'#Swift'} />
            <CustomCategoryButton text={'#UI'} />
          </View>

          <View>
            <View style={{alignItems: 'center'}}>
              <CustomSvg
                source={CoolKid}
                iconStyle={{width: 24, height: 24}}
                color={'red'}
              />

              <CoolKid width={250} height={245} />
              <Text>Button</Text>
            </View>
            <View>
              <Text>3 h 30 min</Text>
              <Text>Course</Text>
              <Text>advance</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default HomeScreen;
