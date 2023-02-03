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

export const SimpleParagraph = styled.p`
  font-weight: 400;
  font-size: 2rem;
  padding-top: 8rem;
  color: ${Colors.blueDark};
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;

export const Paragraph2 = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 5rem;
  color: ${Colors.blueLight};
  animation: ${(props) => (props.animate ? show : '')} 1s ease-in-out;
`;
