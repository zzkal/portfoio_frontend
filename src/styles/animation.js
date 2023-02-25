import { css, keyframes } from 'styled-components';

export const showAndMoveUp = keyframes`
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

export const show = keyframes`
from{
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;
export const scale = keyframes`
  from{
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const normalAnimation = css`
  animation-name: ${showAndMoveUp};
  animation-duration: ${({ duration }) => duration || '1s'};
  animation-timing-function: ${({ f }) => f || 'linear'};
`;
