import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ActionContainer = styled.div`
	margin-bottom: -2em;
	text-align: center;
`;

export const ActionButton = styled.button`
	background: #fff;
	display: block;
	margin: 0 auto;
	border: none;
	color: #000;
	font-size: 22px;
	text-transform: uppercase;
	font-weight: 900;
	border-radius: 100px;
	padding: .7em 2em;
	transition:
		font-size .3s ease,
		padding .3s ease
	;

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
`;