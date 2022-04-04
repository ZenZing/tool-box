import { combineReducers } from 'redux';
import { Home, homeReducer } from './home/index';

const reducers = combineReducers({
  homeReducer
  // your reducers
});

export default reducers;