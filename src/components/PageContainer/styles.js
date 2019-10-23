import styled from 'styled-components';

export const PageContainer = styled.section`
	/* background: #1A2980; */
	background: ${props => (
		props.bgColors ? `linear-gradient(to right, ${props.bgColors.colorFrom}, ${props.bgColors.colorTo})` : `linear-gradient(to right, #d0d, #dd0)`
	)};
	display: flex;
	flex-direction: column;
	min-height: 100%;
	justify-content: center;
	transition: background 2s ease;

	div {
		margin: 0 auto;
		max-width: 1400px;
		padding: 30px;
	}
`;