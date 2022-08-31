import axios from "axios";

const baseURL = "http://api.openweathermap.org";

const api = axios.create({
	baseURL,
	params: {
		appid: "f40ae2f0b26b637e1bc19b10a0e2f0dc",
	},
});

export default api;
