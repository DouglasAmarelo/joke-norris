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
		background: #f1f1f1;
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
		padding: 30px;
		width: 90%;
	}
`;

export default GlobalStyles;