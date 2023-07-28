import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabNavigator from '../tabs/BottomTabNavigator';

const Stack = createStackNavigator();

const GetTabNavigation = () => {
  return <BottomTabNavigator />;
};

const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'TabNavigation'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigation" component={GetTabNavigation} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
