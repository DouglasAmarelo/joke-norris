import React from 'react';

import * as S from './styles';

const Footer = () => {
	return(
		<S.Footer>
			<div>
				Made with&nbsp;
				<a
					href="https://pt-br.reactjs.org/"
					title="React"
					target="_blank"
					rel="noopener noreferrer"
				>
					React
				</a>
				, 🧡, and hosted at&nbsp;
				<a
					href="https://www.netlify.com"
					title="netlify"
					target="_blank"
					rel="noopener noreferrer"
				>
					netlify
				</a>
				.

				<br />

				by&nbsp;
				<a
					href="https://douglasamarelo.com"
					title="Douglas Lopes"
					target="_blank"
					rel="noopener noreferrer"
				>
					Douglas Lopes
				</a>
			</div>
		</S.Footer>
	);
};

export default Footer;