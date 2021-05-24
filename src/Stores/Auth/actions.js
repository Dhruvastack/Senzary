import { types } from "./constants";

//Login functionality
export const createLogin = (data) => {
  debugger;
  console.log(data);
  return {
    type: types.CREATE_LOGIN,
    payload: data,
  };
};

export const createLoginSuccess = (payload) => {
  debugger
  return {
    type: types.CREATE_LOGIN_SUCCESS,
    payload,
  };
};

export const createLoginFailure = (error) => {
  debugger
  return {
    type: types.CREATE_LOGIN_FAILURE,
    payload: {},
    error: error,
  };
};

//Forgot Password Functionality


export const createPassword = (data) => {

  console.log(data);
  return {
    type: types.CREATE_PASSWORD,
    payload: data,
  };
};

export const createPasswordSuccess = (payload) => {
  debugger
  return {
    type: types.CREATE_PASSWORD_SUCCESS,
    payload,
  };
};

export const createPasswordFailure = (error) => {
  debugger
  return {
    type: types.CREATE_PASSWORD_FAILURE,
    payload: {},
    error: error,
  };
};