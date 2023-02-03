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

export const List1 = styled.ul`
  padding-top: 3rem;
  & > li {
    color: ${Colors.blueLight};
    font-size: 1.5rem;
    font-weight: 600;
    list-style: inside;
    animation: ${(props) => (props.animate ? show : '')} 1s ease-in-out;
  }
`;
