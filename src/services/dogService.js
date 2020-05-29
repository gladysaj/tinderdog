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

export const onlyLike = (dog) => {
    return axios.post("http://localhost:3000/api/only-like", dog)
};

export const isMatch = (dog) => {
    return axios.post("http://localhost:3000/api/is-match", dog)
};

export const getMyDog = () => {
    return axios.get("http://localhost:3000/api/find-dog");
  };

export const getMatches = (dog_id) => {
    return axios.get(`http://localhost:3000/api/my-matches/${dog_id}`)
}