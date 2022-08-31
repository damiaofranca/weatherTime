import styled from "styled-components";

export const Container = styled.div`
	width: 30%;
	display: flex;
	min-height: inherit;
	flex-direction: column;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	background: rgba(255, 255, 255, 0.06);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	border-right: 1px solid rgba(255, 255, 255, 0.14);

	& > div:nth-child(2) {
		border-bottom: 3px solid #718583;
	}

	@media screen and (max-width: 768px) {
		width: 100%;

		& > div:nth-child(2) {
			border-bottom: none;
		}

		& > div:nth-child(3) {
			border-bottom: 3px solid #718583;
		}
	}

	@media screen and (max-width: 870px) and (min-width: 769px) {
		width: 45%;
	}

	@media screen and (max-width: 991px) and (min-width: 870px) {
		width: 40%;
	}

	@media screen and (min-width: 992px) {
		width: 30%;
	}
`;

export const Header = styled.div`
	flex: 1;
	display: flex;
	max-height: 4rem;
	backdrop-filter: blur(28.1px);
	background: rgba(13, 26, 18, 0.2);
	box-shadow: inset -56.2px 56.2px 56.2px rgba(255, 255, 255, 0.06);
`;

export const SearchModal = styled.button`
	width: 4rem;
	border: none;
	display: flex;
	cursor: pointer;
	height: inherit;
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
