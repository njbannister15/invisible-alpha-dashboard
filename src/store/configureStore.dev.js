import {createStore, compose, applyMiddleware} from 'redux';
import {persistState} from 'redux-devtools';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import rootReducer from '../reducers'
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
  const store = createStore(rootReducer, initialState, enhancer, applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware
  ));

  if (module.hot) {
    module
      .hot
      .accept('../reducers', () => store.replaceReducer(require('../reducers').default));
  }

  return store;
}


/*
export default function configureStore(initialState) {
  return createStore(
    rootReducer, 
    initialState,   
    applyMiddleware(
      thunkMiddleware
  ));
}
*/
