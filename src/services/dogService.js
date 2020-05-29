import axios from 'axios';

// needed to send credentials to cookie so login is not lost with url change
axios.defaults.withCredentials = true;

export const getMatchDogs = () => {
    return axios.get("http://localhost:3000/api/match")
};

export const getFosterDogs = () => {
    return axios.get("http://localhost:3000/api/foster")
};
  
export const createDogs = (dog) => {
    return axios.post("http://localhost:3000/api/create-dog", dog)
};

export const updateDog = (dog) => {
    return axios.post("http://localhost:3000/api/:id", dog)
};
