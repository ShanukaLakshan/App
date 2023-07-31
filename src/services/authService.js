import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://odd-red-tortoise-toga.cyclic.app/api/';

const logInDB = async (username, password) => {
  const URL = `${BASE_URL}auth/login`;
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });

    const data = await response.json();
    if (response.ok) {
      AsyncStorage.setItem('token', data.accessToken);
      return {
        status: 'success',
        message: 'You are redirecting to home page',
        user: data,
      };
    } else {
      console.log('Login Failed');
      return {
        status: 'failed',
        message: 'Login Failed',
      };
    }
  } catch (error) {
    console.error('Fetch Error:', error);
  }
};

const signUp = async (username, email, password) => {
  const URL = `${BASE_URL}auth/register`;

  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, email, password}),
    });

    const data = await response.json();
    console.log('data', data);

    if (response.ok) {
      console.log('Register Success:', data);
      AsyncStorage.setItem('token', data.accessToken);
      return {
        status: 'success',
        message: 'You are being redirected to the home page',
        user: data,
      };
    } else {
      console.log('Register Failed');
      return {
        status: 'failed',
        message: 'Register Failed',
      };
    }
  } catch (error) {
    console.error('Fetch Error:', error);
    return {
      status: 'error',
      message: 'Something went wrong while processing your request',
    };
  }
};

const getUser = async () => {
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
      // console.log('Get User Success : ', data);
      return {
        status: 'success',
        message: 'You are redirecting to home page',
        data: data,
      };
    } else {
      console.log('Get User Failed');
      return {
        status: 'failed',
        message: 'Get User Failed',
      };
    }
  } catch (error) {
    console.error('Get user data fetch error:', error);
    return {
      status: 'failed',
      message: 'Get User Failed',
    };
  }
};

const logOut = async () => {
  AsyncStorage.clear();
  return {
    status: 'success',
    message: 'You are logged out',
  };
};
export default {
  logOut,
  logInDB,
  getUser,
  signUp,
};
