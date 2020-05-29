import axios from 'axios';
import { base_url } from "./variables";

// needed to send credentials to cookie so login is not lost with url change
axios.defaults.withCredentials = true;

export const getOwnerDogs = () => {
    return axios.get(`${base_url}/find-dog`)
}