import {combineReducers} from 'redux'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from './actions'
import {Map} from 'immutable';
import jwtDecode from 'jwt-decode'

let defaultState = new Map();
try {
  let id_token = localStorage.getItem('id_token')
  let access_token = localStorage.getItem('access_token')
  if (id_token && access_token) {
    var decoded = jwtDecode(id_token);
    defaultState = Map({
      isFetching: false,
      isAuthenticated: id_token ? true : false,
      id_token: id_token,
      access_token: access_token,
      info: decoded.data
    });
  }
} catch (error) {
  defaultState = new Map();
}

function authorization(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Map({
        isFetching: action.isFetching, 
        isAuthenticated: action.isAuthenticated, 
        id_token: action.id_token, 
        access_token: action.access_token, 
        info: action.info
      });
    case LOGIN_FAILURE:
      return Map({
        isFetching: action.isFetching, 
        isAuthenticated: 
        action.isAuthenticated, 
        message: action.message
      });
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