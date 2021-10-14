import axios from "axios";

const baseURL = "http://localhost:3002"

export const getAlLMusics = () => {

    return axios.get(`${baseURL}/albums`)
}

export const switchIsAddToTrue = (id) => {

    return axios.patch(`${baseURL}/albums/${id}`, {
        isAdd: true,
    });
}

export const switchIsAddToFalse = (id) => {

    return axios.patch(`${baseURL}/albums/${id}`, { isAdd: false });
}