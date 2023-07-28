import {LOGIN_SUCCESS, LOGOUT, GET_USER} from '../actions/type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const user = AsyncStorage.getItem('user');

const initialState = user
  ? {isLoggedIn: true, user}
  : {isLoggedIn: false, user: null};

export default auth = (state = initialState, action) => {
  const {type, payload} = action;
  console.log('auth reducer called with type:', type, 'payload:', payload);
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
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
