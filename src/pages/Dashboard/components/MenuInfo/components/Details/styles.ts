import styled from "styled-components";

export const Container = styled.div`
	padding: 2.5rem 2rem 1.5rem;
`;

export const Title = styled.h2`
	color: #9f9f9f;
	font-size: 21px;
	font-weight: 600;
	font-style: normal;
	margin-bottom: 33px;

	@media screen and (max-width: 520px) {
		& {
			color: #1d2424;
		}
	}
`;

export const Detail = styled.h4`
	color: #869595;
	font-size: 17px;
	font-weight: 500;
	margin-left: 1rem;
	font-style: normal;
	font-family: "Roboto";

	@media screen and (max-width: 520px) {
		& {
			color: #2a3434;
		}
	}
`;

export const Result = styled.h4`
	color: #ffffff;
	font-size: 17px;
	font-weight: 700;
	margin-left: 1rem;
	font-style: normal;
	align-items: center;
	font-family: "Roboto";
	justify-content: space-between;
`;

export const ContainerDetail = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 45px;
	justify-content: space-between;

	&:last-child {
		margin-bottom: 0;
	}
`;
