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

//COMO ESTABA
// export const getMyDog = () => {
//     return axios.get("http://localhost:3000/api/get-dogs")
// } 

//CAMBIO QUE HICE
export const getMyDog = () => {
    return axios.get("http://localhost:3000/api/find-dog")
}