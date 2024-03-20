import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const localStorageData = JSON.parse(localStorage.getItem("persist:root"));
const user = localStorageData && localStorageData.user ? JSON.parse(localStorageData.user).currentUser : null;
const TOKEN = user && user.accessToken ? user.accessToken : null;
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
})