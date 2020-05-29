import axios from 'axios';
import { base_url } from "./variables";

// needed to send credentials to cookie so login is not lost with url change
axios.defaults.withCredentials = true;

export const getMatchDogs = () => {
    return axios.get(`${base_url}/match`)
};

export const getFosterDogs = () => {
    return axios.get(`${base_url}/foster`)
};
  
export const createDogs = (dog) => {
    return axios.post(`${base_url}/create-dog`, dog)
};

export const onlyLike = (dog) => {
    return axios.post(`${base_url}/only-like`, dog)
};

export const isMatch = (dog) => {
    return axios.post(`${base_url}/is-match`, dog)
};
