import React from 'react';

import * as S from './styles';

const JokeActions = ({ category, getAJoke }) => {
	return(
		<S.ActionContainer>
			<S.ActionButton onClick={() => getAJoke()}>
				See another joke about {category}
			</S.ActionButton>

			<S.ActionLink
				to="/"
				title="Back to category list"
			>
				Back to category list
			</S.ActionLink>
		</S.ActionContainer>
	);
};

export default JokeActions;