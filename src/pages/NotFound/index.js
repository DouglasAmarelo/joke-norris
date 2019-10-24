import React from 'react';

import PageContainer from '../../components/PageContainer';
import ErrorMessage from '../../components/ErrorMessage';

const NotFound = () => {
	return(
		<PageContainer>
			<div>
				<ErrorMessage>
					Page not found
				</ErrorMessage>
			</div>
		</PageContainer>
	);
};

export default NotFound;