import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/global';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Routes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
