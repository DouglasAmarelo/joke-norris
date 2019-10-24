import React from 'react';

import PageContainer from '../../components/PageContainer';
import ErrorMessage from '../../components/ErrorMessage';

const NotFound = () => {
	return(
		<PageContainer>
			<di>
				<ErrorMessage>
					Page not found
				</ErrorMessage>
			</di>
		</PageContainer>
	);
};

export default NotFound;