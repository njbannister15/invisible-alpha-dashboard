import fetch from 'isomorphic-fetch'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'

function requestLogin(email) {
  return {type: LOGIN_REQUEST, isFetching: true, isAuthenticated: false, email}
}

function receiveLogin(user) {
  return {type: LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, id_token: user.id_token}
}

function loginError(message) {
  return {type: LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message}
}

export const authenticate = (email, password) => {

  return (dispatch) => {

    dispatch(requestLogin(email))

    let opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email": email, "password": password})
    };

    return fetch('http://localhost:3000/users/authenticate', opts).then((response) => {
      if (response.ok) {
        response
          .json()
          .then(user => {
            localStorage.setItem('id_token', user.id_token)
            localStorage.setItem('access_token', user.access_token);
            dispatch(receiveLogin(user))
          });
      }
      else{
         dispatch(loginError(response.statusText));
      }
    }).catch((error) => {
      console.log('An error occured.', error)
      dispatch(loginError(error.message));
    });
  }
}