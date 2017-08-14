import {combineReducers} from 'redux'

import navigation from './navigation/reducers';
import aws from './aws/reducers';
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({  
  navigation,
  form: formReducer,   
  router: routerReducer,
  aws: aws

});

export default rootReducer;
