/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';

function App(): JSX.Element {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaProvider>
    </StoreProvider>
  );
}

export default App;
