import styled from 'styled-components';

export const PageContainer = styled.section`
	background: ${({ bgColors }) => (
		bgColors ? `linear-gradient(to right, ${bgColors.colorFrom}, ${bgColors.colorTo})` : `linear-gradient(to right, #AA076B, #61045F)`
	)};
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100%;
	transition: background 2s ease;

	div {
		margin: 0 auto;
		max-width: 1400px;
		padding: 30px;
	}
`;