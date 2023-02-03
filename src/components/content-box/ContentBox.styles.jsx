import styled, { keyframes } from 'styled-components';
import { Colors } from '../../styles/variables';

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

export const ContentBoxDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding: 3rem;
  margin-top: 8rem;
  border-radius: 30px;
  background-color: ${Colors.blueDark};
  animation: ${(props) => (props.animate ? show : '')} 0.8s ease-in-out;
`;
