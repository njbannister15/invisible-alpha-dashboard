import { combineReducers } from 'redux'
import todos from '../components/todo/reducers';

const rootReducer = combineReducers({
  todos  
});

export default rootReducer;