import { combineReducers } from 'redux'
import todos from '../components/todo/reducers';
import user from '../routes/auth/reducers';

const rootReducer = combineReducers({
  todos,
  user
});

export default rootReducer;
