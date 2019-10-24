import React from 'react';

import * as S from './styles';

const Loading = () => {
	return(
		<S.Loading>
			<S.Sphere className="sphere__01"></S.Sphere>
			<S.Sphere className="sphere__02"></S.Sphere>
			<S.Sphere className="sphere__03"></S.Sphere>
		</S.Loading>
	);
};

export default Loading;