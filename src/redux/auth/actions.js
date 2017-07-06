import fetch from 'isomorphic-fetch'
import jwt_decode from 'jwt-decode';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT = 'LOGOUT'

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'

function requestLogin(email) {
  return {type: LOGIN_REQUEST, isFetching: true, isAuthenticated: false, email}
}

function receiveLogin(user) {
  //var decoded = jwt_decode( user.id_token);
  return {
    type: LOGIN_SUCCESS, 
    isFetching: false, 
    isAuthenticated: true, 
    //info: decoded.data,
    // email: decoded.data.email,
    // firstName: decoded.data.firstName,
    // lastName: decoded.data.lastName,
    id_token: user.id_token
  }
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

export const logout = () => {
  localStorage.removeItem('id_token');
  localStorage.removeItem('access_token');
  return {
    type: LOGOUT 
  }
}