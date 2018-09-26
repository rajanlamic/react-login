import { alertConstants } from "../constants";

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return {
    type: "ALERT_SUCCESS",
    message: "Random Success Message"
  };
}

function error(message) {
  return {
    type: "ALERT_ERROR",
    message: "Random Error Message"
  };
}

function clear() {
  return {
    type: "ALERT_CLEAR"
  };
}
