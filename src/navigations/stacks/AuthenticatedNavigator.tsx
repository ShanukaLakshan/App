import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import BottomTabNavigator from '../tabs/BottomTabNavigator';

const Stack = createStackNavigator();

const getTabNavigation = () => {
  return <BottomTabNavigator />;
};

const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'TabNavigation'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigation" component={getTabNavigation} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
