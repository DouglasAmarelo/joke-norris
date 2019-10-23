import React, { useState, useEffect } from 'react';

import * as api from '../../services/api';
import ListCategories from '../../components/ListCategories';
import PageContainer from '../../components/PageContainer';

const Home = () => {
	const [jokeCategories, setJokeCategories] = useState([]);

	useEffect(() => {
		const jokeCategoriesLocal = localStorage.getItem('jokeCategories');

		if(jokeCategoriesLocal) {
			setJokeCategories(JSON.parse(jokeCategoriesLocal));
			return;
		}

		api.getJokeCategories().then(categories => {
			localStorage.setItem('jokeCategories', JSON.stringify(categories));

			setJokeCategories(categories);
		});
	}, []);

	return(
		<PageContainer>
			<div>
				<ListCategories categories={jokeCategories} />
			</div>
		</PageContainer>
	);
};

export default Home;