import axios from "axios";

const baseURL = "http://api.openweathermap.org";

const APP_ID = "f40ae2f0b26b637e1bc19b10a0e2f0dc";

const api = axios.create({
	baseURL,
	params: {
		appid: APP_ID,
	},
});

export default api;
