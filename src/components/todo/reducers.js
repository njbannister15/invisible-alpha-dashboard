import {combineReducers} from 'redux'
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SHOW_ALL} from './actions'



/**
 * In Redux, all the application state is stored as a single object. 
 * The reducer is a pure function that takes the previous state and 
 * an action, and returns the next state.
 * 
 * We dont mutate state inside a reducer, it must be pure.
 * We never write directly to state or its fields, and instead 
 * we return new objects. 
 */

/** 
 *
 * @param {*} state
 * @param {*} action
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === action.id)
        ? {
          ...todo,
          completed: !todo.completed
        }
        : todo)
    default:
      return state
  }
}
/**
 *
 * @param {*} state
 * @param {*} action
 */
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoReducer = combineReducers({
  list : todos, 
  visibilityFilter
});

export default todoReducer;