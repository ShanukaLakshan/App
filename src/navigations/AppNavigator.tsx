import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './RootNavigator';

import AuthNavigator from './stacks/AuthNavigator';
import AuthenticatedNavigator from './stacks/AuthenticatedNavigator';
import SplashScreen from './SplashScreen';

const RootStack = createStackNavigator();

const getUnAuthStack = () => {
  return <AuthNavigator />;
};

const getAuthenticatedStack = () => {
  return <AuthenticatedNavigator />;
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName={'AuthStack'}>
        <RootStack.Screen name="AuthStack" component={getUnAuthStack} />
        <RootStack.Screen
          name="AuthenticatedStack"
          component={getAuthenticatedStack}
        />
        <RootStack.Screen name="Splash" component={SplashScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
