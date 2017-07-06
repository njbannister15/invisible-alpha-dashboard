import {createStore, compose, applyMiddleware} from 'redux';
import {persistState} from 'redux-devtools';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import rootReducer from '../redux'
import DevTools from '../components/misc/DevTools'
import {persistStore, autoRehydrate} from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware
  ),
  //autoRehydrate(),
  DevTools.instrument(), 
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  //persistStore(store, {transforms: [immutableTransform()]})

  if (module.hot) {
    module
      .hot
      .accept('../redux', () => store.replaceReducer(require('../redux').default));
  }

  return store;
}