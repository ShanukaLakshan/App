import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardNavigator from './DashboardNavigator';
import ProfileNavigator from './ProfileNavigator';
import SettingsNavigator from './SettingsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: 'gray',
        tabBarInactiveBackgroundColor: '#91C8E4',
        tabBarActiveBackgroundColor: '#001C30',
        tabBarInactiveTintColor: '#001C30',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        headerShown: false,

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#91C8E4',
          elevation: 0,
          shadowOpacity: 0,
          height: 55,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'person' : 'person-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconName = focused ? 'settings' : 'settings-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
