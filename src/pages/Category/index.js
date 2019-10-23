import React, { useState, useEffect } from 'react';

import * as api from '../../services/api';

import PageContainer from '../../components/PageContainer';
import Joke from '../../components/Joke';
import JokeActions from '../../components/JokeActions';

const Category = (props) => {
	const { category } = props.match.params;
	const [joke, setJoke] = useState('');

	const getAJoke = () => {
		api.getJoke(category).then(joke => setJoke(joke));
	};

	useEffect(() => {
		getAJoke();
	}, []);

	return(
		<>
			<PageContainer>
				<div>
					<Joke id={joke.id} joke={joke.value} />
				</div>
				<div>
					<JokeActions getAJoke={getAJoke} />
				</div>
			</PageContainer>
		</>
	);
};

export default Category;