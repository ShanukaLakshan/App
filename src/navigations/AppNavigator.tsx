import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigator';
import AuthNavigator from './stacks/AuthNavigator';
import AuthenticatedNavigator from './stacks/AuthenticatedNavigator';
import SplashScreen from './SplashScreen';
import {Routes} from '../routes/routes';
import {getUser} from '../actions/auth';
import {useDispatch} from 'react-redux';

const RootStack = createStackNavigator();

const GetUnAuthStack = () => {
  return <AuthNavigator />;
};

const GetAuthenticatedStack = () => {
  return <AuthenticatedNavigator />;
};

const AppNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [getUser]);

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
