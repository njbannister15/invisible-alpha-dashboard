import {combineReducers} from 'redux'

/**
 * Note that each of these reducers is managing its own part of the global state.
 */

/**
 *
 * @param {*} state
 * @param {*} action
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
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
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
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