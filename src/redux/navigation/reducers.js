import {NAVIGATION_INIT} from './actions'

export default function navigationReducer(state = {
  items: []
}, action) {

  switch (action.type) {
    case NAVIGATION_INIT:
      return {items: action.items};

    default:
      return state

  }

}