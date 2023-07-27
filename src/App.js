import {View, Text} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>App</Text>
      <Icons name="heart-outline" size={30} color="#900" />
    </View>
  );
};

export default App;
