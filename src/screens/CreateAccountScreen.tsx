import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {navigationRef} from '../navigations/RootNavigator';
import {register} from '../actions/auth';

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSignUp = () => {
    dispatch(register(username, email, password))
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
      <Text style={styles.headerTitle}>Please create your new account</Text>

      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        placeholder="password"
      />
      <Button onPress={() => onSignUp()} title="Sign Up" />
      <Text>Do you have an account?</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
};

export default CreateAccountScreen;

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
