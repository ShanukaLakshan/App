

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
