import {LOGIN_SUCCESS, LOGOUT, GET_USER, REGISTER} from './type';

import AuthService from '../services/authService';

export const loginDB = (username, password) => dispatch => {
  return AuthService.logInDB(username, password).then(
    response => {
      if (response.status === 'success') {
        console.log('In login function : ', response);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {user: response},
        });
        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();
      Promise.reject();
      return message;
    },
  );
};

export const register = (username, email, password) => dispatch => {
  return AuthService.signUp(username, email, password).then(
    response => {
      // console.log('In register function : ', response);
      if (response.status === 'success') {
        dispatch({
          type: REGISTER,
          payload: {user: response},
        });
        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();
      Promise.reject();
      return message;
    },
  );
};

export const getUser = () => dispatch => {
  return AuthService.getUser().then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: GET_USER,
          payload: {response},
        });
        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();
      Promise.reject();
      return message;
    },
  );
};

export const logout = () => dispatch => {
  return AuthService.logOut().then(response => {
    if (response.status === 'success') {
      dispatch({
        type: LOGOUT,
      });
      Promise.resolve();
      return response;
    }
  });
};
