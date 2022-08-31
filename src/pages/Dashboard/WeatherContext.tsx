import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../../setup/api";
import { CitiesResponse, HistoricCities } from "./model";

interface CityInterface {
	setWeatherOfHistoric: (lat: number, lon: number, name: string) => void;
	onSetSelectedCity: (city: CitiesResponse) => void;
	historicCities: HistoricCities[];
	city: CitiesResponse;
	weather: any;
}
export const CityContext = createContext<CityInterface>({} as CityInterface);

export const CityProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [weather, setWeather] = useState<any>(null);
	const [historicCities, setHistoricCities] = useState<HistoricCities[]>([]);
	const [city, setCity] = useState<CitiesResponse>({
		country: "",
		lat: 0,
		local_names: null,
		lon: 0,
		name: "",
		state: "",
	});

	const setHistoricDataInLocalStorage = (data: any) => {
		return new Promise<HistoricCities[]>((resolve, reject) => {
			const totalValues = JSON.parse(
				localStorage.getItem("historic") as string
			) as [];
			const getValues: any[] = [...(totalValues ? totalValues : [])];
			getValues.push(data);
			localStorage.setItem("historic", JSON.stringify(getValues));
			const values = localStorage.getItem("historic");
			if (values) {
				resolve(JSON.parse(values));
			} else {
				reject("Erro ao salvar histórico");
				throw new Error("Erro ao salvar histórico");
			}
		});
	};

	const setHistoricCity = (city: HistoricCities) => {
		setHistoricDataInLocalStorage(city).then((data) => {
			setHistoricCities(data);
		});
	};

	const setDataInSessionStorage = (data: any) => {
		return new Promise((resolve, reject) => {
			sessionStorage.setItem("weather", JSON.stringify(data));
			const values = sessionStorage.getItem("weather");
			if (values) {
				resolve(JSON.parse(values));
			} else {
				reject("Error ao setar clima");
				throw new Error("Error ao setar clima");
			}
		});
	};

	const setWeatherOfHistoric = async (
		lat: number,
		lon: number,
		name: string
	) => {
		try {
			const { data } = await api.get<any>("/data/2.5/weather", {
				params: {
					lat: lat,
					lng: lon,
					q: name,
					units: "metric",
					lang: "pt_br",
				},
			});
			setDataInSessionStorage(data)
				.then((val) => {
					setWeather(val);
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const setWeatherFn = async (lat: number, lon: number, name: string) => {
		try {
			const { data } = await api.get<any>("/data/2.5/weather", {
				params: {
					lat: lat,
					lng: lon,
					q: name,
					units: "metric",
					lang: "pt_br",
				},
			});
			setDataInSessionStorage(data)
				.then((val) => {
					setWeather(val);
					setHistoricCity({
						lat: lat,
						lng: lon,
						name: name,
						country: data.sys.country,
					});
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const onSetSelectedCity = (city: CitiesResponse) => {
		city && setCity(city);
		setWeatherFn(city.lat, city.lon, city.name);
	};

	useEffect(() => {
		const values = sessionStorage.getItem("weather");
		const historicCities = localStorage.getItem("historic");
		if (values && historicCities) {
			setWeather(JSON.parse(values));
			setHistoricCities(JSON.parse(historicCities));
		}
	}, []);

	return (
		<CityContext.Provider
			value={{
				setWeatherOfHistoric,
				onSetSelectedCity,
				historicCities,
				weather,
				city,
			}}
		>
			{children}
		</CityContext.Provider>
	);
};
