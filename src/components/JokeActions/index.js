import React from 'react';

import * as S from './styles';

const JokeActions = () => {
	return(
		<S.ActionContainer>
			<S.ActionButton>
				See another joke about animal
			</S.ActionButton>

			<S.ActionLink to="/">back to category list</S.ActionLink>
		</S.ActionContainer>
	);
};

export default JokeActions;