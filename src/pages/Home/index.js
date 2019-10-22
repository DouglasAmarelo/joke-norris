import React, { useState, useEffect } from 'react';

import * as api from '../../services/api';
import ListCategories from '../../components/ListCategories';
import PageContainer from '../../components/PageContainer';

const Home = () => {
	const [jokeCategories, setJokeCategories] = useState([]);

	useEffect(() => {
		api.getJokeCategories().then(categories => setJokeCategories(categories));
	}, []);

	return(
		<PageContainer>
			<ListCategories categories={jokeCategories} />
		</PageContainer>
	);
};

export default Home;