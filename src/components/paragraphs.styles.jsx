import styled, { keyframes } from 'styled-components';

const show = keyframes`
from{
  transform: translateY(20rem);
  opacity: 0;
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const SimpleParagraph = styled.p`
  font-weight: 400;
  font-size: 2rem;
  padding-top: 8rem;
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;
