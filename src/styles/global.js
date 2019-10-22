import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

	* {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		padding: 0;
	}

	html,
	body { height: 100%; }

	body {
		background: #f1f1f1;
		font-family: 'Montserrat', sans-serif;
		padding-bottom: 80px;
		padding-top: 90px;

		@media (max-width: 490px) {
			padding-bottom: 50px;
			padding-top: 70px;
		}
	}

	#root { height: 100%; }
`;

export default GlobalStyles;