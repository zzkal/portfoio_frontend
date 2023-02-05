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
  box-shadow: -3px 9px 18px -9px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: -3px 9px 18px -9px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: -3px 9px 18px -9px rgba(0, 0, 0, 0.57);
  transition: all 0.25s ease-in-out;

  &:active {
    transform: translateY(-1rem);
    box-shadow: -5px 1px 0px -2px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: -5px 1px 0px -2px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: -5px 1px 0px -2px rgba(0, 0, 0, 0.57);
  }
`;
