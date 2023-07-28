import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import Notification from './notification';
import userReducer from './userReducer';

const RootReducers = combineReducers({
  Reducers,
  Notification,
  userReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
