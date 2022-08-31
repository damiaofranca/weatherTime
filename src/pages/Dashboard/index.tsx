import React, { useContext, useState } from "react";
import cloudy from "../../assets/images/cloudy.jpg";
import rainy from "../../assets/images/rainy.jpg";
import sunny from "../../assets/images/sunny.jpg";
import windy from "../../assets/images/windy.jpg";
import refresh from "../../assets/svg/icons/refresh.svg";
import useWindowSize from "../../utils/useWindowSize";
import { MenuInfo } from "./components/MenuInfo";
import { Modal } from "./components/Modal";
import { WeatherConditions } from "./components/WeatherConditions";
import { ChangePhoto, Container } from "./styles";
import { CityContext } from "./WeatherContext";
const weathers = [cloudy, rainy, sunny, windy];

export const Dashboard: React.FC = () => {
	const { weather, historicCities } = useContext(CityContext);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [photoIdx, setPhotoIdx] = useState<number>(0);
	const size = useWindowSize();

	const changePhotoFn = () => {
		if (photoIdx === 3) {
			setPhotoIdx(0);
		} else {
			setPhotoIdx(photoIdx + 1);
		}
	};

	return (
		<Container backgroundImge={weathers[photoIdx]}>
			<ChangePhoto onClick={changePhotoFn} src={refresh} />
			<Modal isVisible={showModal} onClose={() => setShowModal(false)} />
			<MenuInfo
				historic={historicCities}
				weather={weather}
				showModalFn={() => setShowModal(true)}
			/>
			{size.width && size.width > 768 ? (
				<WeatherConditions weather={weather} />
			) : null}
		</Container>
	);
};
