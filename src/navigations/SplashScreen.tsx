import {View, Text, Image, ActivityIndicator} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

import {useEffect, useState} from 'react';
import {navigationRef} from './RootNavigator';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [navigationRef.current?.navigate('AuthStack')]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#20315f',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icons name="logo-apple-ar" size={100} color="#91C8E4" />
      <Text style={{color: '#91C8E4', fontSize: 30, fontWeight: 'bold'}}>
        Apple AR
      </Text>
      <ActivityIndicator
        animating={isLoading}
        color="#91C8E4"
        size="large"
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default SplashScreen;
