import axios from 'axios';

// needed to send credentials to cookie so login is not lost with url change
axios.defaults.withCredentials = true;

export const getOwnerDogs = () => {
    return axios.get("http://localhost:3000/api/find-dog")
}