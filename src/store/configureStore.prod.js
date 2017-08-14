import {createStore, compose, applyMiddleware} from 'redux';
import {persistState} from 'redux-devtools';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import rootReducer from '../redux'

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware    
  )
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}