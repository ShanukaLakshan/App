import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';

function DashboardScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        Dashboard Screen
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
