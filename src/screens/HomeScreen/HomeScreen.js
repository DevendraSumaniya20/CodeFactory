import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomSearch from '../../components/CustomSearch';
import Color from '../../constants/Color';
import styles from './Styles';
import {moderateScale} from 'react-native-size-matters';

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  let isPress = false;

  const handleSearch = text => {
    setSearchValue(text);
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: Color.WHITE}}>
        <SafeAreaView style={styles.subContainer}>
          <View style={{marginHorizontal: moderateScale(16)}}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>Hello,</Text>
                <Text>Juana Antonieta</Text>
              </View>
              <View>
                <Text>Ghanti</Text>
              </View>
            </View>
            <CustomSearch
              inputStyle={{width: '90%'}}
              placeholder="Search"
              onChangeText={handleSearch}
              value={searchValue}
              rightIcon={!isPress ? 'search-outline' : ''}
              onPressRight={() => {}}
            />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default HomeScreen;
