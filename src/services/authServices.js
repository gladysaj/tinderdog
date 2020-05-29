import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const login = (credential) => {
  return axios.post(`${base_url}/login`, credential);
};

//Esta ruta no estaba sirviendo porque para poder hacer un signup en el modelo de usuario estaba
//requerido el numero de telefono y el nombre. Para arreglarlo, le agregue el campo de Phone number y
//name en el proceso del signup
export const signup = (credential) => {
  return axios.post(`${base_url}/signup`, credential);
};

export const logout = () => {
  return axios.post(`${base_url}/logout`);
};
