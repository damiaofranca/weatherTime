import React from "react";
import { Container, ContainerDetail, Detail, Result, Title } from "./styles";

interface DetailsProps {
	weather: any;
}

export const Details: React.FC<DetailsProps> = ({ weather }) => {
	const notSelected = "Selecione uma cidade";
	return (
		<Container>
			<Title>Detalhes do tempo</Title>
			<ContainerDetail>
				<Detail>Nuvens</Detail>
				<Result>{weather ? weather.clouds.all + "%" : notSelected}</Result>
			</ContainerDetail>
			<ContainerDetail>
				<Detail>Humidade</Detail>
				<Result>{weather ? weather.main.humidity + "%" : notSelected}</Result>
			</ContainerDetail>
			<ContainerDetail>
				<Detail>Vento</Detail>
				<Result>{weather ? weather.wind.speed + "Km/h" : notSelected}</Result>
			</ContainerDetail>
		</Container>
	);
};
