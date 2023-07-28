import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {login} from '../actions/auth';
import {navigationRef} from '../navigations/RootNavigator';

type User = {
  username: string;
  password: string;
};

const SignInScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onLogin = () => {
    let user: User = {
      username: username,
      password: password,
    };
    dispatch(login(user))
      .then((response: {status: string}) => {
        if (response.status === 'success') {
          navigationRef.current?.navigate('AuthenticatedStack');
        }
      })
      .catch(() => {
        navigationRef.current?.navigate('AuthStack');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Please Login to your account</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
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

const styles = StyleSheet.create({
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
