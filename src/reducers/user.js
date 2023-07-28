import {GET_USER} from '../actions/type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  username: '',
  email: '',
  isLoggedIn: false,
};

const user = async (state = initialState, action) => {
  const {type, payload} = action;

  console.log('auth reducer called with type:', type, 'payload:', payload);

  switch (type) {
    case GET_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    default:
      return state;
  }
};

export default user;
