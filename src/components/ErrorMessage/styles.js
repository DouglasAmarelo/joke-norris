import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorContainer = styled.section`
	padding: 30px;
	text-align: center;
`;

export const ErrorText = styled.h1`
	color: #fff;
	font-size: 40px;
	text-shadow: 0 2px 2px rgba(0, 0, 0, .7);
	text-transform: uppercase;
`;

export const ErrorIcon = styled.span`
	color: #fff;
	display: block;
	font-size: 60px;
	margin: .5em 0;
`;

export const ErrorLink = styled(Link)`
	color: #fff;
	font-size: 14px;
	font-weight: 900;
	text-transform: uppercase;

	&:hover {
		color: #000;
		text-decoration: none;
	}
`;