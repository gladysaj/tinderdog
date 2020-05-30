import { base_url } from "./variables"; // <--- ⚠️ all routes should now use base url instead of localhost


import axios from 'axios';

// needed to send credentials to cookie so login is not lost with url change
axios.defaults.withCredentials = true;

export const getUser = () => {
    return axios.get(`${base_url}/match`)
}

export const getFosterDogs = () => {
    return axios.get(`${base_url}/foster`)
}

export const updateUser = (params) => {
    console.log("parametross--------------",params)
      return axios.post(`${base_url}/user-update/${params._id}`, params)
  }  
