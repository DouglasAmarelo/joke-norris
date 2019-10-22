import styled from 'styled-components';

export const Header = styled.header`
	background: #000;
	box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .5);
	color: #fff;
	height: 90px;
	position: fixed;
	top: 0;
	width: 100%;

	@media (max-width: 490px) {
		font-size: 10px;
		height: 70px;
	}

	a {
		display: block;
		height: 100%;
	}

	img {
		display: block;
		margin: 0 auto;
		max-height: 100%;
		width: auto;
	}
`;