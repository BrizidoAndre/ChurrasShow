

import axios from "axios";


/* const ip = '172.16.39.118'; */
const ip = '172.16.39.118';/* ip Everton */

const door = '5209';

const apiUrlLocal = `http://${ip}:${door}/api`


const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;