import React from 'react';

import * as S from './styles';

const ErrorMessage = ({ children }) => {
	return(
		<S.ErrorContainer>
			<S.ErrorText>
				{children}
			</S.ErrorText>

			<S.ErrorIcon>
				<span
					role="img"
					aria-label="Sad face"
				>
					😢
				</span>
			</S.ErrorIcon>

			<S.ErrorLink to="/">
				Back to category list
			</S.ErrorLink>
		</S.ErrorContainer>
	);
};

export default ErrorMessage;