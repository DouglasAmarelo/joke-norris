import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Routes />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
