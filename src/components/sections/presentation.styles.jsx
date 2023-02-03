import { Colors } from '../../styles/variables';
import { ReactComponent as DoubleArrow } from '../../assets/double_arrow.svg';
import styled, { keyframes } from 'styled-components';

const showAndMoveUp = keyframes`
from{
  visibility: hidden;
  opacity: 0;
  transform: translateY(10rem);
}
to {
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
}
`;

const showAndMoveUpDoubleArrow = keyframes`
from{
  opacity: 0;
  bottom: 0%;
}
50% {
  opacity: 1;
  bottom: 22%;
}
80% {
  opacity: 1;
  bottom: 18%;
}
to {
  opacity: 1;
  bottom: 20%;
}
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  position: relative;
  padding: 0 4rem 0 4rem;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  text-align: start;
  margin-top: 12rem;
`;

export const SmallText = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  margin-top: 2rem;
  animation: ${showAndMoveUp} 0.5s ease;
`;

export const BigText = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  animation: ${showAndMoveUp} 1.5s ease;
`;

export const MediumText = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  animation: ${showAndMoveUp} 2s ease;
`;

export const DoubleArrowIcon = styled(DoubleArrow)`
  position: absolute;
  bottom: 20%;
  left: 50%;
  height: 5rem;
  width: 5rem;
  animation: ${showAndMoveUpDoubleArrow} 1s ease-in-out;

  transform: translateX(-50%);
`;
