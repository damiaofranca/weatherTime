import React, { useContext, useState } from "react";
import { HistoricCities } from "../../../../model";
import { CityContext } from "../../../../WeatherContext";
import { City, Container, History, Title } from "./styles";

interface HistoricProps {
	historic: HistoricCities[];
}

export const HistoricCitiesComponent: React.FC<HistoricProps> = ({
	historic,
}) => {
	const [selectedCity, setSelectedCity] = useState<number | null>(null);
	const { setWeatherOfHistoric } = useContext(CityContext);
	return (
		<Container>
			<Title>Histórico de localização</Title>
			<History>
				{historic &&
					historic.map((city, key) => (
						<City
							key={key}
							isSelected={selectedCity === key}
							onClick={() => {
								setSelectedCity(key);
								setWeatherOfHistoric(city.lat, city.lng, city.name);
							}}
						>
							{city.name}, {city.country}
						</City>
					))}
			</History>
		</Container>
	);
};
