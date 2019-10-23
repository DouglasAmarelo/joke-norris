import React from 'react';

import * as S from './styles';

const Joke = ({ joke, id }) => {
	return(
		<S.JokeText key={id}>
			{joke}
		</S.JokeText>
	);
};

export default Joke;