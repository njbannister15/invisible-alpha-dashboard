import { combineReducers } from 'redux'
import todos from '../components/todo/reducers';
import user from './auth/reducers';

const rootReducer = combineReducers({
  todos,
  user
});

export default rootReducer;
