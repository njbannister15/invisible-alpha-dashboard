import {GET_BUCKETS, GET_BUCKETS_SUCCESS, GET_BUCKETS_FAILURE,
GET_OBJECTS, GET_OBJECTS_SUCCESS, GET_OBJECTS_FAILURE} from './actions'
import {Map} from 'immutable';

let defaultState = new Map({isFetching: false});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_BUCKETS:
      return Map({isFetching: action.isFetching});
    case GET_BUCKETS_SUCCESS:
      return Map({isFetching: action.isFetching, buckets: action.payload});
    case GET_BUCKETS_FAILURE:
      return Map({isFetching: false, error: action.error});
    case GET_OBJECTS:
      return Map({isFetching: action.isFetching});
    case GET_OBJECTS_SUCCESS:
      return Map({isFetching: action.isFetching, objects: action.payload});
    case GET_OBJECTS_FAILURE:
      return Map({isFetching: false, error: action.error});
    default:
      return state
  }
}

export default reducer;