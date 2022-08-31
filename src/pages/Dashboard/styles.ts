import styled from "styled-components";

export const Container = styled.div<{ backgroundImge: any }>`
	width: 100%;
	display: flex;
	min-height: 100vh;
	position: absolute;
	background-size: cover;
	background-position: center;
	background-image: url(${(props) => props.backgroundImge});

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ChangePhoto = styled.img`
	top: 1.2rem;
	right: 1rem;
	cursor: pointer;
	position: absolute;
	z-index: 2;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		right: auto;
		left: 1rem;
	}
`;
