import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://odd-red-tortoise-toga.cyclic.app/api/';

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      });
    }
  };
};

export const SetAlert = (type, message) => {
  return dispatch => {
    dispatch({
      type: 'SET_ALERT',
      payload: {type, msg: message},
    });
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
      });
    }, 3000);
  };
};

export const Login = (username, password) => {
  return async dispatch => {
    const URL = `${BASE_URL}auth/login`;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login Success:', data);

        AsyncStorage.setItem('token', data.accessToken);

        dispatch({
          type: 'LOGIN',
          payload: data,
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILED',
          payload: data,
        });

        dispatch(SetAlert('danger', data.error));

        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };
};

export const Register = (username, email, password) => {
  return async dispatch => {
    const URL = `${BASE_URL}auth/register`;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          isAdmin: false,
        }),
      });

      if (response.ok) {
        console.log('Register Success');

        // Login after successful register
        const loginResponse = await fetch(`${BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const loginData = await loginResponse.json();

        if (loginResponse.ok) {
          console.log('Login Success:', loginData);

          AsyncStorage.setItem('token', loginData.accessToken);
        }

        dispatch({
          type: 'REGISTER',
          payload: loginData,
        });
      } else {
        console.log('Registration Failed');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };
};

export const getUser = () => {
  return async dispatch => {
    const URL = `${BASE_URL}users/find`;
    let token = await AsyncStorage.getItem('token');
    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Get User Success:', data);
        dispatch({
          type: 'GET_USER',
          payload: data,
        });
      } else {
        console.log('Get User Failed');
      }
    } catch (error) {
      console.error('Get user data fetch error:', error);
      dispatch({
        type: 'GET_USER_FAILED',
        payload: error,
      });
    }
  };
};

export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
