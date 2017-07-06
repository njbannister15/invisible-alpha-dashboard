
/** Learning Notes:
 * Actions are payloads of information that send data from
 * your application to your store. 
 * 
 * Actions are plain JavaScript objects. Actions must have 
 * a type property that indicates the type of action being 
 * performed.
 * */

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SHOW_ALL = 'SHOW_ALL';


let nextTodoId = 0

/** Learning Notes
 * Action creators are functions that create actions.
 * In Redux action creators simply return an action:
 */
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})
