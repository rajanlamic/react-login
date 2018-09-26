import { resolve } from "url";

export const userService = {
  login,
  logout,
  register
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch("/users/authenticate", requestOptions).then(handleResponse);

  // call `/users/authenticate` with requestOptions to authenticate the login process
}

function logout() {
  localStorage.removeItem("user");
  // remove user from local storage to log user out
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch("/users/register", requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
