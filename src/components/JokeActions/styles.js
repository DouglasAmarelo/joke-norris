import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ActionContainer = styled.div`
	text-align: center;
`;

export const ActionButton = styled.button`
	background: #fff;
	border-radius: 100px;
	border: none;
	color: #000;
	cursor: pointer;
	display: block;
	font-size: 22px;
	font-weight: 900;
	margin: 0 auto;
	padding: .7em 2em;
	text-transform: uppercase;
	transition:
		box-shadow .3s ease,
		text-shadow .3s ease,
		font-size .3s ease,
		padding .3s ease
	;

	&:hover {
		box-shadow: 0 0 10px 0 #fff;
		text-shadow: 0 2px 1px #ccc;
	}

	@media (max-width: 640px) { font-size: 16px; }
	@media (max-width: 490px) {
		font-size: 12px;
		padding: 1em 3em;
	}
`;

export const ActionLink = styled(Link)`
	color: #fff;
	display: inline-block;
	font-size: 14px;
	font-weight: 900;
	margin: 1.5em 0;
	text-transform: uppercase;

	@media (max-width: 640px) { font-size: 10px; }

	&:hover {
		text-decoration: none;
		color: #000;
	}
`;