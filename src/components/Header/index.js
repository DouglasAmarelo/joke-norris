import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import jokeNorrisLogo from '../../assets/images/joke-norris-logo.jpg';

const Header = () => {
	return(
		<S.Header>
			<div className="container">
				<Link to="/" title="Home">
					<img src={jokeNorrisLogo} alt="Joke Norris"/>
				</Link>
			</div>
		</S.Header>
	);
};

export default Header;
