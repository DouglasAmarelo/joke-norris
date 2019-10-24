import React from 'react';

import * as S from './styles';

const ListCategories = ({ categories }) => {
	return(
		<S.List>
			{categories.map(category => (
				<S.ListItem key={category}>
					<S.ListItemLink
						to={`/category/${category}`}
						title={category}
					>
						{category}
					</S.ListItemLink>
				</S.ListItem>
			))}
		</S.List>
	);
};

export default ListCategories;