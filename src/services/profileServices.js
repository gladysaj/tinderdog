// import axios from "axios";
import { base_url } from "./variables"; // <--- ⚠️ all routes should now use base url instead of localhost

// //No funciona
// export const getLikes = () => {
//     return axios.get("http://localhost:3000/likes")
// }

import axios from 'axios';

// needed to send credentials to cookie so login is not lost with url change
axios.defaults.withCredentials = true;

export const getUser = () => {
    return axios.get("http://localhost:3000/api/match")
}

export const getFosterDogs = () => {
    return axios.get("http://localhost:3000/api/foster")
}