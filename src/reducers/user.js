import {GET_USER} from '../actions/type';

const initialState = {
  username: '',
  email: '',
  isAdmin: false,
};

const user = async (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default user;
