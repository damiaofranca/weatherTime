import React from "react";
import {
	Col,
	Container,
	Description,
	DontWrap,
	Icon,
	Name,
	Temperature,
} from "./styles";

interface WeatherConditionsProps {
	weather: any;
}
export const WeatherConditions: React.FC<WeatherConditionsProps> = ({
	weather,
}) => {
	return (
		<Container>
			<Temperature>
				{weather ? Math.floor(weather.main.temp) + "°C" : "--"}
			</Temperature>
			<Col>
				<Name>{weather ? weather.name : "Selecione uma cidade"}</Name>
				{weather ? (
					<DontWrap>
						<Description>{weather.weather[0].description}</Description>
						<Icon
							src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
						/>
					</DontWrap>
				) : null}
			</Col>
		</Container>
	);
};
//
