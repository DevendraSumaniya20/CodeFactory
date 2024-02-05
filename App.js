import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';

import Navigation from './src/navigation/Navigation';
import store from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
