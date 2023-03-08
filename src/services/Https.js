import axios from "axios";
import { BASE_API } from "../constants.js/app";

const Http = axios.create({
    baseURL: BASE_API,
    responseType: 'json',
    withCredentials: true,
});

export default Http;