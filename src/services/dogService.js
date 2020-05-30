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

export const getMyDog = () => {
    return axios.get(`${base_url}/find-dog`);
  };

export const getMatches = (dog_id) => {
    return axios.get(`${base_url}/my-matches/${dog_id}`)
} 