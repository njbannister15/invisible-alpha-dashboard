export const register = (data) => {
  return({type: "CUSTOMER_REGISTRATION"})
}

export const authenticate = (data) => {
  return({type: "AUTHENTICATE"})
}

export const logout = (data) => {
  return({type: "LOGOUT"})
}