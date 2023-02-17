import styled from 'styled-components';
import { TextSize } from '../../styles/text-variables/text-size';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Colors } from '../../styles/variables';

export const ButtonComponent = styled.a`
  height: 4rem;
  max-width: 20rem;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${TextSize.medium};
  font-weight: ${TextWeight.bold};
  background-color: ${Colors.redLigth};
  color: ${Colors.blueDark};
  user-select: none;
  box-shadow: -5px 5px 0px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -5px 5px 0px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -5px 5px 0px -1px rgba(0, 0, 0, 0.75);
  transition: all 0.25s ease-in-out;

  &:active {
    background-color: ${Colors.blueLight};
    transform: translateY(0.2rem);
    box-shadow: none;
  }
`;
