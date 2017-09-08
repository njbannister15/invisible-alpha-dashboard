import apiFetch from '../../../lib/apiFetch'

export const GET_BUCKETS = 'GET_BUCKETS'
export const GET_BUCKETS_SUCCESS = 'GET_BUCKETS_SUCCESS'
export const GET_BUCKETS_FAILURE = 'GET_BUCKETS_FAILURE'

export const GET_OBJECTS = 'GET_OBJECTS'
export const GET_OBJECTS_SUCCESS = 'GET_OBJECTS_SUCCESS'
export const GET_OBJECTS_FAILURE = 'GET_OBJECTS_FAILURE'

function request(type) {
  return {type: type, isFetching: true}
}

function receive(type, payload) {
  return {type: type, isFetching: false, payload: payload}
}

function error(type, error) {
  return {type: type, isFetching: false, error}
}

export const getBuckets = () => {
  return (dispatch) => {
    dispatch(request(GET_BUCKETS))

    let opts = {
      method: 'GET'
    };

    return apiFetch('/s3/buckets', opts).then((response) => {
      if (response.ok) {
        response
          .json()
          .then(buckets => {
            dispatch(receive(GET_BUCKETS_SUCCESS, buckets))
          });
      } else {
        dispatch(error(GET_BUCKETS_FAILURE, response.statusText));
      }
    }).catch((error) => {

      dispatch(error(GET_BUCKETS_FAILURE, error.message));
    });
  }
}

export const getObjects = (name) => {
  return (dispatch) => {
    dispatch(request(GET_OBJECTS))

    let opts = {
      method: 'GET'
    };

    return apiFetch('/s3/buckets/' + name, opts).then((response) => {
      if (response.ok) {
        response
          .json()
          .then(objects => {
            dispatch(receive(GET_OBJECTS_SUCCESS, objects))
          });
      } else {
        dispatch(error(GET_OBJECTS_FAILURE, response.statusText));
      }
    }).catch((error) => {

      dispatch(error(GET_OBJECTS_FAILURE, error.message));
    });
  }
}
export const uploadFile = (bucket, file) => {
  return (dispatch) => {

    const formData = new FormData();
    formData.append('file', file);

    let opts = {
      method: 'POST',
      'Accept': 'application/json, */*',
      body: formData
    };

    return apiFetch('/s3/buckets/' + bucket + '/' + file.name, opts).then((response) => {
      if (response.ok) {
        response
          .json()
          .then(data => {
            dispatch(uploadSuccess(data))
          })
      } else {
        dispatch(uploadFail(response.statusText));
      }
    }).catch((error) => {
      dispatch(uploadFail(GET_OBJECTS_FAILURE, error.message));
    });

  }
}

export function uploadSuccess({data}) {
  return {type: 'UPLOAD_DOCUMENT_SUCCESS', data};
}

export function uploadFail(error) {
  return {type: 'UPLOAD_DOCUMENT_FAIL', error};
}