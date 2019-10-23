import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import NotFound from './pages/NotFound';

const Routes = () => {
	return(
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/category/:category" component={Category} />
			<Route component={NotFound} />
		</Switch>
	);
};

export default Routes;