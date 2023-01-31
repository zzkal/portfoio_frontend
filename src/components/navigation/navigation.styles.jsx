import { ReactComponent as LightMode } from '../../assets/light_mode.svg';
import { ReactComponent as DarkMode } from '../../assets/dark_mode.svg';

import styled, { keyframes } from 'styled-components';
import { Colors } from '../../styles/variables';

const showAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const NavigationContainer = styled.div`
  background-color: ${Colors.blueLight};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: sticky;
  padding: 2rem;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 50;
`;

export const HamburguerContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  height: 36px;
  width: 48px;
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;

  & > span {
    position: absolute;
    background-color: ${Colors.blueDark};
    border-radius: 9px;
    width: 100%;
    height: 5px;
    opacity: 1;
    transform: rotate(0deg);
    transition: all 0.25s ease-in-out;
  }

  & :nth-child(1) {
    top: 0;
    transform: ${(props) =>
      props.isOpen
        ? 'translateY(15px) rotate(45deg)'
        : 'translateY(0) rotate(0)'};
  }
  & :nth-child(2) {
    top: 40%;
    transform: scaleX(${(props) => (props.isOpen ? '0' : '1')});
    opacity: ${(props) => (props.isOpen ? '0' : '1')};
  }
  & :nth-child(3) {
    bottom: 0;
    transform: ${(props) =>
      props.isOpen
        ? 'translateY(-15px) rotate(-45deg)'
        : 'translateY(0) rotate(0)'};
  }
`;

export const LightModeIcon = styled(LightMode)`
  height: 48px;
  width: 48px;
  animation: ${showAnimation} 1s ease;
`;

export const DarkModeIcon = styled(DarkMode)`
  height: 48px;
  width: 48px;
  animation: ${showAnimation} 1s ease;
`;
