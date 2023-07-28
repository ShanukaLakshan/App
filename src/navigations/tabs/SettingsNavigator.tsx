import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../actions/auth';
import {useDispatch} from 'react-redux';
import {navigationRef} from '../RootNavigator';

function SettingsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
      .then((response: {status: string}) => {
        if (response.status == 'success') {
          navigationRef.current?.navigate('AuthStack');
        }
      })
      .catch(error => {
        navigation.navigate('Settings');
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        Settings Screen
      </Text>
      <Button
        title="Log Out"
        onPress={() => {
          handleLogout();
        }}
      />
    </View>
  );
}

function LogOutScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        Log Out Screen
      </Text>
    </View>
  );
}

// Screen imports
const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Settings'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="LogOut" component={LogOutScreen} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
