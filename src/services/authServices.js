import axios from "axios";

axios.default.withCredentials = true;

export const login = (credential) => {
  return axios.post("http://localhost:3000/users/login", credential);
};

export const signup = (credential) => {
  return axios.post("http://localhost:3000/signup", credential);
};
