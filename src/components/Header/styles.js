import styled from 'styled-components';

export const Header = styled.header`
	background: #000;
	box-shadow: 0 3px 3px 0 rgba(0, 0, 0, .5);
	color: #fff;
	height: 90px;

	.container {
		display: flex;
		justify-content: center;
	}

	a { display: block; }

	img {
		display: block;
		max-height: 100%;
		width: auto;
	}
`;