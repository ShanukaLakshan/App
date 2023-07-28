import {LOGIN_SUCCESS, LOGOUT, GET_USER} from './type';

import AuthService from '../services/authService';

export const login = user => dispatch => {
  return AuthService.logIn(user).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {user: response.user},
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

export const loginDB = (username, password) => dispatch => {
  return AuthService.logInDB(username, password).then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {user: response.user},
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
  console.log('get user called');
  return AuthService.getUser().then(
    response => {
      if (response.status === 'success') {
        dispatch({
          type: GET_USER,
          payload: {user: response.user},
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
