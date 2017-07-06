import {combineReducers} from 'redux'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from './actions'
import {Map} from 'immutable';

const defaultState = Map({
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token')? true : false,
  id_token: localStorage.getItem('id_token')
});

function authorization(state = new Map(), action) {
  switch (action.type) {    
    case LOGIN_SUCCESS: 
      return Map({
        isFetching: action.isFetching, 
        isAuthenticated: action.isAuthenticated, 
        id_token: action.id_token,
        info: action.info 
    });
    case LOGIN_FAILURE:
      return Map({
        isFetching: action.isFetching, 
        isAuthenticated: action.isAuthenticated, 
        message: action.message});
    case LOGOUT:
      return Map({
        isFetching: false,
        isAuthenticated: false
      });
    default:
      return state
  }
}
const todoReducer = combineReducers({auth: authorization});

export default todoReducer;