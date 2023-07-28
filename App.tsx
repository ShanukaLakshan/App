/**
 * @format
 */

import React from 'react';
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
