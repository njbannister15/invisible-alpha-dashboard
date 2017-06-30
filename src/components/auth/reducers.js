import {combineReducers} from 'redux'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actions'
import {Map} from 'immutable';
//import {jwt} from 'jsonwebtoken';

const defaultState = Map({
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token')? true : false,
  id_token: localStorage.getItem('id_token')
});

function authorization(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return Map({
        isFetching: action.isFetching, 
        isAuthenticated: action.isAuthenticated, 
        id_token: action.id_token});
    case LOGIN_FAILURE:
      return Map({
        isFetching: action.isFetching, 
        isAuthenticated: action.isAuthenticated, 
        message: action.message});
    default:
      return state
  }
}
const todoReducer = combineReducers({auth: authorization});

export default todoReducer;