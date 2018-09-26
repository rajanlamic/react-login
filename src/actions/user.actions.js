import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  register
};

function login(username, password) {
  return dispatch => {
    dispatch(request(username));
    userService
      .login(username, password)
      .then(user => {
        history.push("/");
        dispatch(success(user));
      })
      .catch(err => dispatch(failure(err)));
  };
  // return the promise using fetch which adds to localstorage on resolve

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return success();

  function success() {
    return { type: userConstants.LOGOUT };
  }

  // complete this function
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    userService
      .register(user)
      .then(user => {
        dispatch(success(user));
      })
      .catch(err => dispatch(failure(err)));
  };
  // return the promise using fetch which dispatches appropriately

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}
