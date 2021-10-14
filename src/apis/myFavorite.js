import axios from "axios";

const baseURL = "http://localhost:3002"

export const getMyFavorties = () => {

    return axios.get(`${baseURL}/myFavorites`)
}


export const addToMyFavorties = (data) => {

    return axios.post(`${baseURL}/myFavorites`,data)
}


export const deleteFromMyFavorties = (id) => {

    return axios.delete(`${baseURL}/myFavorites/${id}`);
}
