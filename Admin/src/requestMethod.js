import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
// Check if the user exists in local storage and has a valid structure
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