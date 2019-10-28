import { combineReducers } from 'redux';
import cars from './cars/reducer';

const rootReducer = combineReducers({
  cars: cars
});

export default rootReducer;
