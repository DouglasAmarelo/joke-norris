import React, { useState, useEffect } from 'react';

import * as api from '../../services/api';

import PageContainer from '../../components/PageContainer';
import Joke from '../../components/Joke';
import JokeActions from '../../components/JokeActions';
import Loading from '../../components/Loading';

const Category = (props) => {
	const { category } = props.match.params;
	const [joke, setJoke] = useState('');

	const getAJoke = async () => {
		setJoke('');
		const thisJoke = await api.getJoke(category);
		await setJoke(thisJoke);
	};

	useEffect(() => {
		getAJoke();
	}, []);

	return(
		<>
			<PageContainer>
				<div>
					{joke && (
						<Joke
							id={joke.id}
							joke={joke.value}
						/>
					)}

					{!joke && (
						<Loading />
					)}
				</div>

				<div>
					<JokeActions
						category={category}
						getAJoke={getAJoke}
					/>
				</div>
			</PageContainer>
		</>
	);
};

export default Category;