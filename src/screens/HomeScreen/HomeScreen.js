import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomSearch from '../../components/CustomSearch';
import Color from '../../constants/Color';
import styles from './Styles';
import {BellIcon} from '../../constants/SvgPath';
import CustomDescriptionText from '../../components/CustomDescriptionText';
import CustomWelcomeText from '../../components/CustomWelcomeText';

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
      <View style={{flex: 1, backgroundColor: Color.WHITE}}>
        <SafeAreaView style={styles.subContainer}>
          <View style={{marginHorizontal: moderateScale(16)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                <CustomDescriptionText text={'Hello'} />
                <CustomWelcomeText text={'Juana Antonieta'} />
              </View>
              <View
                style={{
                  borderRadius: moderateScale(100),
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: moderateScale(5),
                }}>
                <BellIcon
                  width={moderateScale(25)}
                  height={moderateScale(24)}
                />
              </View>
            </View>
            <CustomSearch
              inputStyle={{width: '90%'}}
              placeholder="Search"
              onChangeText={handleSearch}
              value={searchValue}
              rightIcon={!showSuggestions ? 'search-outline' : ''}
              onPressRight={() => {}}
            />
            {showSuggestions && searchValue !== '' ? (
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
            )}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default HomeScreen;
