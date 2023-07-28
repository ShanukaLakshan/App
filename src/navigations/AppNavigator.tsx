import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigator';
import AuthNavigator from './stacks/AuthNavigator';
import AuthenticatedNavigator from './stacks/AuthenticatedNavigator';
import SplashScreen from './SplashScreen';
import {Routes} from '../routes/routes';

const RootStack = createStackNavigator();

const GetUnAuthStack = () => {
  return <AuthNavigator />;
};

const GetAuthenticatedStack = () => {
  return <AuthenticatedNavigator />;
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={Routes.SPLASH}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <RootStack.Screen name={Routes.AUTHSTACK} component={GetUnAuthStack} />
        <RootStack.Screen
          name={Routes.AUTHENTICATEDSTACK}
          component={GetAuthenticatedStack}
        />
        <RootStack.Screen name={Routes.SPLASH} component={SplashScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
