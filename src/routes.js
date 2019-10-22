import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Joke from './pages/Joke';
import NotFound from './pages/NotFound';

const Routes = () => {
	return(
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/category/:category" component={Joke} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default Routes;