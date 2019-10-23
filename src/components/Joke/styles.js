import styled from 'styled-components';

export const JokeText = styled.h1`
	color: #fff;
	font-size: 50px;
	font-weight: 900;
	text-align: center;
	transition: font-size .3s ease;

	@media (max-width: 640px) { font-size: 40px; }
	@media (max-width: 490px) { font-size: 30px; }
`;