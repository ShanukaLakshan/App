const initialState = {
  type: null,
  msg: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        type: action.payload.type,
        msg: action.payload.msg,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        type: null,
        msg: null,
      };

    default:
      return state;
  }
};
