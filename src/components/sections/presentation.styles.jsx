import styled, { keyframes } from 'styled-components';

const showAndMoveUp = keyframes`
from{
  opacity: 0;
  transform: translateY(10rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const PresentationContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
`;

export const SmallText = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  animation: ${showAndMoveUp} 500ms linear;
`;

export const BigText = styled.h1`
  font-size: 4.5rem;
  font-weight: 600;
  animation: ${showAndMoveUp} 500ms linear;
`;

export const MediumText = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  animation: ${showAndMoveUp} 500ms linear;
`;
