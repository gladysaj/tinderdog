import axios from 'axios';

// needed to send credentials to cookie so login is not lost with url change
axios.defaults.withCredentials = true;

export const getUser = () => {
    return axios.get("http://localhost:3000/api/match")
}

export const getFosterDogs = () => {
    return axios.get("http://localhost:3000/api/foster")
}

// export const updateUser = (params) => {
//     return axios.patch(`http://localhost:3000/api/user-update/${params._id}`, params.user)
// }

export const updateUser = (params) => {
    console.log("parametross--------------",params)
      return axios.patch(`http://localhost:3000/api/user-update/${params._id}`, params.user)
  }