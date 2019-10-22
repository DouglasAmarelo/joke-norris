import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
	align-content: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	height: 100%;
	list-style: none;
	width: 100%;
`;

export const ListItem = styled.li`
	flex: 1 1 20%;
	text-align: center;
	margin: .8em .2em;
`;

export const ListItemLink = styled(Link)`
	border-radius: 100px;
	color: #fff;
	display: inline-block;
	font-size: 30px;
	font-weight: 900;
	padding: 6px 1.5em;
	text-decoration: none;
	text-transform: uppercase;
	transition:
		background-color .2s ease,
		color .2s ease,
		font-size .3s ease,
		padding .3s ease
	;

	@media (max-width: 640px) { font-size: 22px; }
	@media (max-width: 490px) { font-size: 16px; }

	/* Hover effects */
	&:hover {
		background-color: #fff;
		color: #000;
	}
`;