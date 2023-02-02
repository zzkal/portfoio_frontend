import styled, { keyframes } from 'styled-components';
import { Colors } from '../styles/variables';

const show = keyframes`
from{
  transform: translateY(10rem);
  opacity: 0;
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const Title1 = styled.h1`
  position: relative;
  top: 0;
  font-size: 5rem;
  color: ${Colors.blueDark};
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;
