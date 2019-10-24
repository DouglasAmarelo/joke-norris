import React, { useState, useEffect } from 'react';

import * as S from './styles';

const PageContainer = ({ children }) => {
	const [bgColor, setBgColor] = useState({ colorFrom: '#AA076B', colorTo: '#61045F', });

	useEffect(() => {
		const pageColors = [
			{ colorFrom: '#02AAB0', colorTo: '#00CDAC', },
			{ colorFrom: '#1A2980', colorTo: '#26D0CE', },
			{ colorFrom: '#1A2980', colorTo: '#61045F', },
			{ colorFrom: '#AA076B', colorTo: '#61045F', },
			{ colorFrom: '#AA076B', colorTo: '#EA384D', },
			{ colorFrom: '#D31027', colorTo: '#EA384D', },
			{ colorFrom: '#E52D27', colorTo: '#B31217', },
		];

		const chooseRandomColor = (arrColors) => {
			const randomItem = Math.floor(Math.random() * arrColors.length);
			setBgColor(arrColors[randomItem]);
		};

		chooseRandomColor(pageColors);
	}, []);

	return(
		<S.PageContainer bgColors={bgColor}>
			{children}
		</S.PageContainer>
	);
};

export default PageContainer;