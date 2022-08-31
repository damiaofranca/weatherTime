import styled from "styled-components";

export const Backdrop = styled.div`
	top: 0%;
	left: 0;
	z-index: 4;
	width: 100%;
	height: 100%;
	position: absolute;
	align-items: center;
	justify-content: center;

	@keyframes smoothEffect {
		from {
			background-color: #ffffff00;
		}
		to {
			background-color: #0000007a;
		}
	}

	&.show-modal {
		display: flex;
		animation-duration: 0.5s;
		animation-name: smoothEffect;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	&.close-modal {
		display: none;
	}
`;

export const Box = styled.div`
	width: 100%;
	flex-direction: column;

	@keyframes smoothBoxEffect {
		from {
			background-color: #ffffff00;
		}
		to {
			background-color: #222626;
		}
	}

	&.show-box-modal {
		display: flex;
		animation-duration: 0.5s;
		animation-name: smoothBoxEffect;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	&.close-box-modal {
		display: none;
	}

	@media screen and (max-width: 672px) {
		max-width: 90%;
	}

	@media screen and (max-width: 767px) and (min-width: 672px) {
		max-width: 60%;
	}

	@media screen and (max-width: 870px) and (min-width: 768px) {
		max-width: 70%;
	}

	@media screen and (max-width: 991px) and (min-width: 870px) {
		max-width: 60%;
	}

	@media screen and (min-width: 992px) and (max-width: 1199px) {
		max-width: 50%;
	}

	@media screen and (min-width: 1200px) {
		max-width: 30%;
	}
`;

export const Actions = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const CloseButton = styled.button`
	width: 3rem;
	height: 3rem;
	border: none;
	display: flex;
	cursor: pointer;
	align-items: center;
	transition: all 0.18s;
	justify-content: center;
	background-color: #718583;
	&:focus {
		outline: none;
	}

	&:hover {
		background-color: #657b79;
	}
`;

export const Icon = styled.img``;

export const Title = styled.h2`
	display: flex;
	color: #e0e3e3;
	font-size: 30px;
	font-weight: 400;
	margin-left: 44px;
	font-style: normal;
	margin-bottom: 1.5rem;
`;

export const SearchFild = styled.input`
	border: none;
	height: 3rem;
	color: #757575;
	padding: 0;
	margin: 0 44px 2rem 44px;
	background-color: transparent;
	border-bottom: 3px solid #464c4d;
	&:focus,
	&:hover {
		outline: none;
	}

	@media screen and (max-width: 576px) {
		margin: 0 28px 2rem 28px;
	}
`;

export const ListCity = styled.div`
	overflow-y: auto;
	min-height: 20rem;
	max-height: 20rem;
	margin: 0 28px 2rem 28px;

	@media screen and (max-width: 576px) {
	}

	&::-webkit-scrollbar {
		width: 2px;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(90, 90, 90);
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}
`;

export const CityItem = styled.div`
	display: flex;
	margin: 0 0.5rem;
	margin-bottom: 2rem;
	justify-content: space-between;
	border-bottom: 1px solid #464c4d;
`;

export const CityTitle = styled.div`
	display: flex;
`;

export const CityName = styled.h4`
	color: #757575;
	font-weight: 400;
	font-size: 0.9rem;
	margin-bottom: 1rem;
	margin-right: 0.2rem;
	text-transform: capitalize;
`;

export const State = styled.h4`
	color: #757575;
	font-weight: 400;
	font-size: 0.9rem;
	margin-bottom: 1rem;
	margin-right: 0.2rem;
	text-transform: capitalize;
`;

export const Country = styled.h4`
	color: #757575;
	font-weight: 700;
	font-size: 0.9rem;
	text-transform: uppercase;
`;

export const Loading = styled.p`
	color: #757575;
	font-weight: 400;
	font-size: 1rem;
	text-align: center;
`;
