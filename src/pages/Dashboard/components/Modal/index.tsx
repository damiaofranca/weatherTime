import React, { useContext, useEffect, useState } from "react";
import close from "../../../../assets/svg/icons/close-tick.svg";
import api from "../../../../setup/api";
import { CitiesResponse } from "../../model";
import { CityContext } from "../../WeatherContext";
import {
	Actions,
	Backdrop,
	Box,
	CityItem,
	CityName,
	CityTitle,
	CloseButton,
	Country,
	Icon,
	ListCity,
	Loading,
	SearchFild,
	State,
	Title,
} from "./styles";

interface ModalProps {
	onClose: () => void;
	isVisible: boolean;
}

export const Modal: React.FC<ModalProps> = ({ onClose, isVisible }) => {
	const [loading, setLoading] = useState(false);
	const { onSetSelectedCity } = useContext(CityContext);
	const [searchText, setSearchText] = useState<string>("");
	const [cities, setCities] = useState<CitiesResponse[]>([]);

	const setCity = async (city: CitiesResponse) => {
		try {
			await onSetSelectedCity(city);
			onClose && onClose();
		} catch (err) {
			throw err;
		}
	};

	const fetchCity = async (name: string) => {
		try {
			const { data } = await api.get<CitiesResponse[]>("/geo/1.0/direct", {
				params: {
					q: name,
					limit: 5,
				},
			});
			setLoading(false);
			setCities(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (searchText?.length > 3) {
			setLoading(true);
			const delay = setTimeout(() => fetchCity(searchText.toLowerCase()), 2000);
			return () => clearTimeout(delay);
		}
	}, [searchText]);

	return (
		<Backdrop className={isVisible ? "show-modal" : "close-modal"}>
			<Box className={isVisible ? "show-box-modal" : "close-box-modal"}>
				<Actions>
					<CloseButton onClick={onClose}>
						<Icon src={close} />
					</CloseButton>
				</Actions>
				<Title>Buscar cidade</Title>
				<SearchFild
					type={"text"}
					placeholder={"Digite o nome da cidade..."}
					value={searchText}
					onChange={(el) => setSearchText(el.target.value)}
				/>
				<ListCity>
					{!loading ? (
						cities.map((city) => (
							<CityItem key={city.lon} onClick={() => setCity(city)}>
								<CityTitle>
									<CityName>{city.name} -</CityName>
									<State>{city.state} -</State>
									<Country> {city.country} </Country>
								</CityTitle>
							</CityItem>
						))
					) : (
						<Loading>Carregando...</Loading>
					)}
				</ListCity>
			</Box>
		</Backdrop>
	);
};
