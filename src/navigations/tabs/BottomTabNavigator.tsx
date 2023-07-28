import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardNavigator from './DashboardNavigator';
import ProfileNavigator from './ProfileNavigator';
import SettingsNavigator from './SettingsNavigator';
import Icons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#91C8E4',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#20315f',
        inactiveBackgroundColor: '#001C30',
        style: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Tab.Screen name="Dashboard" component={DashboardNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
