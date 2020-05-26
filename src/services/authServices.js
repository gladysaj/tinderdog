import axios from "axios";

axios.defaults.withCredentials = true;

export const login = (credential) => {
  return axios.post("http://localhost:3000/api/login", credential);
};

//Esta ruta no estaba sirviendo porque para poder hacer un signup en el modelo de usuario estaba
//requerido el numero de telefono y el nombre. Para arreglarlo, le agregue el campo de Phone number y
//name en el proceso del signup
export const signup = (credential) => {
  return axios.post("http://localhost:3000/api/signup", credential);
};

export const logout = () => {
  return axios.post("http://localhost:3000/api/logout");
};
