import React, { useState } from "react";
import magnify from "../../../../assets/svg/icons/magnify.svg";
import useWindowSize from "../../../../utils/useWindowSize";
import { HistoricCities } from "../../model";
import { WeatherConditions } from "../WeatherConditions";
import { Details } from "./components/Details";
import { HistoricCitiesComponent } from "./components/HistoricCities";
import { Timer } from "./components/Timer";
import { Container, Header, Icon, SearchModal } from "./style";

interface MenuInfoProps {
	showModalFn: () => void;
	historic: HistoricCities[];
	weather: any;
}

export const MenuInfo: React.FC<MenuInfoProps> = ({
	showModalFn,
	historic,
	weather,
}) => {
	const size = useWindowSize();

	return (
		<>
			<Container>
				<Header>
					<Timer />
					<SearchModal onClick={showModalFn}>
						<Icon src={magnify} />
					</SearchModal>
				</Header>
				{size.width && size.width <= 768 ? (
					<WeatherConditions weather={weather} />
				) : null}

				<Details weather={weather} />
				<HistoricCitiesComponent historic={historic} />
			</Container>
		</>
	);
};
