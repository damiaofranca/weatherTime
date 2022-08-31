export interface CitiesResponse {
	country: string;
	lat: number;
	local_names: any;
	lon: number;
	name: string;
	state: string;
}

export interface HistoricCities {
	lat: number;
	lng: number;
	country: string;
	name: string;
}
