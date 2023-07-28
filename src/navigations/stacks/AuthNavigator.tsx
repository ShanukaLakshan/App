/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';

function IntroScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        Intro!
      </Text>
      <Button
        title="Sign In"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
}

function SignInScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        SignIn!
      </Text>
      <Button
        title="IntroScreen"
        onPress={() => {
          navigation.navigate('IntroScreen');
        }}
      />

      <Button
        title="Create Account"
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}
      />
    </View>
  );
}

function CreateAccountScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        CreateAccount!
      </Text>
      <Button
        title="SignIn"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
      <Button
        title="HomeWelcome"
        onPress={() => {
          navigation.navigate('HomeWelcome');
        }}
      />
    </View>
  );
}

function HomeWelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        HomeWelcome!
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="HomeWelcome" component={HomeWelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
