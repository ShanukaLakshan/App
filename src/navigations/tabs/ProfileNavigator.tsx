import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../../actions/auth';
import {useEffect} from 'react';

function ProfileScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        Email :
      </Text>
      <Button
        title="Edit Profile"
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
      />
    </View>
  );
}

function EditProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
        }}>
        Edit Profile Screen
      </Text>
    </View>
  );
}

// Screen imports
const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'MyProfile'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyProfile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
