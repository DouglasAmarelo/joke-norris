import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

	* {
		box-sizing: border-box;
		margin: 0;
		outline: none;
		padding: 0;
	}

	body {
		font-family: 'Montserrat', sans-serif;
		background: #ccc;
	}

	#root {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: space-between;
	}

	.container {
		height: 100%;
		margin: 0 auto;
		max-width: 1120px;
		padding: 0 30px;
		width: 90%;
	}
`;

export default GlobalStyles;