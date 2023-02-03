import styled, { keyframes } from 'styled-components';
import { Colors } from '../styles/variables';

const show = keyframes`
from{
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const Title1 = styled.h1`
  position: relative;
  top: 0;
  font-size: 5rem;
  color: ${Colors.blueDark};
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;

export const Title2 = styled.h2`
  font-size: 2rem;
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;
export const Title3 = styled.h3`
  color: ${Colors.redLigth};
  font-size: 2rem;
  animation: ${(props) => (props.animate ? show : '')} 1s ease-in-out;
`;
export const Title4 = styled.h4`
  font-size: 0.8rem;
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;
export const Title5 = styled.h5`
  font-size: 0.5rem;
`;
