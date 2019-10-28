// import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
  return next => {
    return action => {
      console.log('middleware dispatch', action); // the action we just dispatched
      const result = next(action);
      console.log('middleware next state', store.getState()); // the updated state
      return result;
    };
  };
};

export default (initialState = {}) => {
  return createStore(rootReducer, reduxDevTools(applyMiddleware(logger)));
};
