const initialState = {
  authToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authToken: action.payload,
      };
    case 'LOGOUT':
      return {
        authToken: null,
      };

    case 'REGISTER':
      return {
        ...state,
        authToken: action.payload,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        data: action.payload.error,
      };

    default:
      return state;
  }
};
