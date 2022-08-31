import styled from "styled-components";

export const Container = styled.div`
	margin: 4rem 2rem 1.5rem;
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

export const History = styled.div`
	overflow-y: auto;
	max-height: 22rem;
	min-height: 22rem;
	margin-bottom: 3rem;

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

export const City = styled.h4<{ isSelected: boolean }>`
	color: ${(props) => (props.isSelected ? "#000000 !important" : "#869595")};
	cursor: pointer;
	font-size: 17px;
	font-weight: 500;
	margin-left: 1rem;
	font-style: normal;
	margin-bottom: 45px;
	font-family: "Roboto";
	&:last-child {
		margin-bottom: 0;
	}
	@media screen and (max-width: 520px) {
		& {
			color: #2a3434;
		}
	}
`;
