const initialState = {
  username: '',
  email: '',
  isAdmin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
    case 'GET_USER_FAILED':
      return {
        ...state,
        username: '',
        email: '',
        isAdmin: false,
      };
    default:
      return state;
  }
};
