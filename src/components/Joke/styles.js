import styled from 'styled-components';

export const JokeText = styled.h1`
	color: #fff;
	font-size: 50px;
	font-weight: 900;
	text-align: center;
	text-shadow: 0 2px 2px rgba(0, 0, 0, .7);
	transition: font-size .3s ease;

	@media (max-width: 640px) { font-size: 40px; }
	@media (max-width: 490px) { font-size: 30px; }
`;