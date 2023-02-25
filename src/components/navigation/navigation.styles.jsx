import { ReactComponent as LightMode } from '../../assets/light_mode.svg';
import { ReactComponent as DarkMode } from '../../assets/dark_mode.svg';

import styled from 'styled-components';
import { Colors } from '../../styles/variables';
import { show } from '../../styles/animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  padding: 2rem;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  transition: all 0.25s ease;
  z-index: 50;

  ${({ isdraweropen, isscrolldown, positiony }) => {
    if (!isdraweropen) {
      if (isscrolldown) {
        return `opacity: 0; transform:translateY(-10rem); `;
      } else {
        if (positiony > 60) {
          return `background-color: ${Colors.blueDark}; box-shadow: 1px 4px 5px -2px rgba(0,0,0,1);`;
        } else {
          return `background-color: ${Colors.blueLight}; `;
        }
      }
    } else {
      return `background-color: ${Colors.blueDark};    `;
    }
  }}
`;

export const NavigationTitles = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 50%;

  & > a {
    ${({ isscrolldown, positiony }) => {
      if (isscrolldown) {
        return `opacity: 0; transform:translateY(-10rem); `;
      } else {
        if (positiony > 60) {
          return `color: ${Colors.blueLight};`;
        } else {
          return `color: ${Colors.blueDark}; `;
        }
      }
    }}
  }
`;

export const NavTitle = styled(Link)`
  border-radius: 30px;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  color: ${Colors.blueDark};
  padding: 0 1rem 0 1rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: ${Colors.blueLight};
    background-color: ${Colors.blueDark};
  }
`;

export const HamburguerContainer = styled(motion.div)`
  position: sticky;
  top: 2rem;
  left: 2rem;
  background-color: transparent;
  height: 30px;
  width: 40px;
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
  z-index: 55;

  & > span {
    position: absolute;
    background-color: ${({ isopen, positiony }) => {
      if (positiony > 60 || isopen) {
        return Colors.blueLight;
      } else {
        return Colors.blueDark;
      }
    }};

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
      props.isopen
        ? 'translateY(12.5px) rotate(45deg)'
        : 'translateY(0) rotate(0)'};
  }
  & :nth-child(2) {
    top: 40%;
    transform: scaleX(${(props) => (props.isopen ? '0' : '1')});
    opacity: ${(props) => (props.isopen ? '0' : '1')};
  }
  & :nth-child(3) {
    bottom: 0;
    transform: ${(props) =>
      props.isopen
        ? 'translateY(-12.5px) rotate(-45deg)'
        : 'translateY(0) rotate(0)'};
  }
`;

export const LightModeIcon = styled(LightMode)`
  height: 32px;
  width: 32px;
  fill: ${(props) => {
    if (props.positiony > 60) {
      return Colors.blueLight;
    } else {
      return Colors.blueDark;
    }
  }};
  animation: ${show} 1s ease;
`;

export const DarkModeIcon = styled(DarkMode)`
  height: 32px;
  width: 32px;
  fill: ${(props) => {
    if (props.positiony > 60) {
      return Colors.blueLight;
    } else {
      return Colors.blueDark;
    }
  }};
  animation: ${show} 1s ease;
`;
