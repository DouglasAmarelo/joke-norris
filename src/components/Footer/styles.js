import styled from 'styled-components';

export const Footer = styled.footer`
	align-items: center;
	background: #000;
	bottom: 0;
	color: #fff;
	display: flex;
	font-size: 12px;
	height: 80px;
	justify-content: center;
	position: fixed;
	text-align: center;
	width: 100%;

	@media (max-width: 490px) {
		height: 50px;
		font-size: 10px;
	}

	a { color: #fff; }
`;