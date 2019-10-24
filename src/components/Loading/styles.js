import styled from 'styled-components';

const animationTime = '.5s';
const sphereSize = '15px';

export const Loading = styled.div`
	position: relative;
	width: 100px;
`;

export const Sphere = styled.span`
	animation: loading ${animationTime} ease-in-out infinite alternate;
	background-color: #fff;
	border-radius: 50%;
	bottom: 0;
	box-shadow: 0 2px 2px rgba(0, 0, 0, .7);
	display: inline-block;
	height: ${sphereSize};
	position: absolute;
	width: ${sphereSize};

	&.sphere__01 {
		animation-delay: 0;
		left: 0;
	}

	&.sphere__02 {
		animation-delay: calc(${animationTime} / 2);
		left: calc(50% - ${sphereSize}/2);
	}

	&.sphere__03 {
		animation-delay: ${animationTime};
		right: 0;
	}

	@keyframes loading {
		0% {
			box-shadow: 0 2px 2px rgba(0, 0, 0, .7);
			transform: translateY(0);
		}
		100% {
			box-shadow: 0 20px 20px rgba(0, 0, 0, .9);
			transform: translateY(-20px);
		}
	}
`;
