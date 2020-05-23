import axios from "axios";

axios.defaults.withCredentials = true;

export const login = (credential) => {
  return axios.post("http://localhost:3000/api/users/login", credential);
};

export const signup = (credential) => {
  return axios.post("http://localhost:3000/api/users/signup", credential);
};
