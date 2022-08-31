import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	height: fit-content;
	margin: 75px 60px 0 0;
	justify-content: flex-end;

	@media screen and (max-width: 870px) {
		justify-content: center;
		margin: 120px 20px 20px 20px;
	}

	@media screen and (max-width: 768px) {
		& {
			margin: 40px 20px 0px 20px;
		}
	}
`;

export const Temperature = styled.h1`
	display: flex;
	color: #e0e3e3;
	font-weight: 700;
	font-size: 82px;
	font-style: normal;
	font-family: "Roboto";

	@media screen and (max-width: 576px) {
		& {
			font-size: 42px;
		}
	}

	@media screen and (max-width: 870px) and (min-width: 769px) {
		& {
			font-size: 42px;
		}
	}
`;

export const Col = styled.div`
	display: flex;
	margin-left: 1rem;
	flex-direction: column;
`;

export const DontWrap = styled.div`
	display: flex;
`;

export const Name = styled.h3`
	color: #e0e3e3;
	font-size: 34px;
	font-weight: 500;
	font-style: normal;
	height: fit-content;
	font-family: "Roboto";
	letter-spacing: 0.01em;

	@media screen and (max-width: 576px) {
		& {
			font-size: 26px;
		}
	}

	@media screen and (max-width: 870px) and (min-width: 769px) {
		& {
			font-size: 26px;
		}
	}
`;

export const Description = styled.p`
	display: flex;
	color: #e0e3e3;
	font-size: 15px;
	font-weight: 400;
	align-items: center;
	font-family: "Roboto";
	letter-spacing: 0.08rem;
	text-transform: capitalize;
`;

export const Icon = styled.img`
	width: 3rem;
	height: 3rem;
	margin-left: 1rem;
`;
