import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import rootReducer from '../redux'
import DevTools from '../components/misc/DevTools'

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module
      .hot
      .accept('../redux', () => store.replaceReducer(require('../redux').default));
  }

  return store;
}