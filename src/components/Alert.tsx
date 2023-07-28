import { View, Text } from 'react-native';
import React from 'react';

type AlertProps = {
  type: string;
  message: string;
};

const Alert = ({ type, message }: AlertProps) => {
  let backgroundColor, color;

  switch (type) {
    case 'danger':
      backgroundColor = '#E76161';
      color = 'white';
      break;
    case 'success':
      backgroundColor = '#98D8AA';
      color = 'white';
      break;
    case 'warning':
      backgroundColor = '#FEFF86';
      color = 'black';
      break;
    default:
      backgroundColor = 'gray';
      color = 'white';
      break;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        width: '90%',
        margin: 10,
      }}
    >
      <Text
        style={{
          color,
          fontSize: 12,
          alignSelf: 'center',
          textAlign: 'center',
        }}
      >
        {message}
      </Text>
    </View>
  );
};

export default Alert;
