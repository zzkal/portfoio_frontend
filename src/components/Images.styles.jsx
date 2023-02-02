import styled, { keyframes } from 'styled-components';

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

export const MainImage = styled.img`
  border-radius: 30px;
  width: 15rem;
  margin-top: 8rem;
  align-self: center;
  box-shadow: -7px 8px 21px -10px rgba(0, 0, 0, 0.69);
  -webkit-box-shadow: -7px 8px 21px -10px rgba(0, 0, 0, 0.69);
  -moz-box-shadow: -7px 8px 21px -10px rgba(0, 0, 0, 0.69);
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;
