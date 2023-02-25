import styled from 'styled-components';
import { Colors } from '../../styles/variables';
import { ReactComponent as PIcon } from '../../assets/more.svg';
import { ReactComponent as PlIcon } from '../../assets/place.svg';
import { ReactComponent as LIcon } from '../../assets/less.svg';
import { motion } from 'framer-motion';
import { scale, spin } from '../../styles/animation';

export const AccordionContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 11rem;
`;

export const AccordionHeader = styled(motion.div)`
  background-color: transparent;
  color: ${Colors.blueDark};
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 6rem;

  ${({ isopen }) => {
    if (isopen) {
      return `border-bottom: none;
        width: 100%;
        padding: 0 5vw 0 5vw;
        background-color: #b3cfff;`;
    } else {
      return `border-bottom: 2px solid ${Colors.blueDark}; 
      width: 90%; 
      padding: 0 2rem 0 2rem`;
    }
  }}

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    padding-left: 5rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: 1200px) {
    transition: all 0.1s ease-in;

    &:hover {
      background-color: #b3cfff;
    }
  }
`;

export const PlusIcon = styled(PIcon)`
  height: 4rem;
  width: 4rem;
  animation: ${spin} 0.25s ease-in-out;
`;

export const LessIcon = styled(LIcon)`
  height: 4rem;
  width: 4rem;
  animation: ${scale} 0.25s ease-in-out;
`;

export const PlaceIcon = styled(PlIcon)`
  height: 3rem;
  width: 3rem;
  fill: ${Colors.blueLight};
  margin-right: 2rem;
`;

export const AccordiontDetailsContainer = styled(motion.div)`
  min-width: 100vw;
  -webkit-box-shadow: inset 0px 2px 9px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: inset 0px 2px 9px 0px rgba(0, 0, 0, 1);
  box-shadow: inset 0px 2px 9px 0px rgba(0, 0, 0, 1);
`;

export const AccordionDetails = styled(motion.div)`
  display: flex;
  flex-flow: column;
  color: ${Colors.blueLight};
  padding: 3rem 3rem 7rem 3rem;

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 25rem;
    padding-right: 5rem;
  }
`;
