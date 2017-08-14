import {combineReducers} from 'redux'

import navigation from './navigation/reducers';
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({  
  navigation,
  form: formReducer,   
  router: routerReducer
});

export default rootReducer;
