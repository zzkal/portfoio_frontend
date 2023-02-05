import styled, { keyframes } from 'styled-components';
import { Colors } from '../styles/variables';
import { show } from '../styles/animation';

export const List1 = styled.ul`
  padding-top: 3rem;
  & > li {
    color: ${Colors.blueLight};
    font-size: 1.5rem;
    font-weight: 400;
    list-style: inside;
    text-align: justify;
  }
`;
