import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../actions/auth';
import {navigationRef} from '../navigations/RootNavigator';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const onLogin = () => {
    let user = {
      username: username,
      password: password,
    };
    dispatch(login(user))
      .then((response: {status: string}) => {
        if (response.status == 'success') {
          navigationRef.current?.navigate('AuthenticatedStack');
        }
      })
      .catch(error => {
        navigation.navigate('SignIn');
      });
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.headerTitle}>Please Login to your account</Text>
      <TextInput
        style={Styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        style={Styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        placeholder="password"
      />
      <Button onPress={() => onLogin()} title="Login" />
      <Text>Don't have an account?</Text>
      <Button
        title="Create Account"
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}
      />
    </View>
  );
};

export default SignInScreen;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
  },
  input: {
    width: 360,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
    marginVertical: 10,
  },
});
