import axios from 'axios';

const ip = 'churrasshowwebapi.azurewebsites.net';

const apiUrlLocal = `https://${ip}/api`;

const api = axios.create({
	baseURL: apiUrlLocal,
});

export default api;
