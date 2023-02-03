import styled, { keyframes } from 'styled-components';

const show = keyframes`
from{
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const MainImage = styled.img`
  width: 100%;
  margin-top: 1rem;
  box-shadow: -4px 3px 0px 1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -4px 3px 0px 1px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 3px 0px 1px rgba(0, 0, 0, 1);
  animation: ${show} 1s ease-in-out;
`;
