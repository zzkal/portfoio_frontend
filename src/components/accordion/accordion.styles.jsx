import styled from 'styled-components';
import { Colors } from '../../styles/variables';
import { ReactComponent as PIcon } from '../../assets/more.svg';
import { ReactComponent as PlIcon } from '../../assets/place.svg';
import { ReactComponent as LIcon } from '../../assets/less.svg';
import { motion } from 'framer-motion';
import { scale, spin } from '../../styles/animation';

export const AccordionContainer = styled.div`
  margin-top: 11rem;
`;

export const AccordionHeader = styled(motion.div)`
  background-color: ${Colors.blueLight};
  color: ${Colors.blueDark};
  border-bottom: 2px solid ${Colors.blueDark};
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 6rem;
  width: 100%;
  padding: 0 2rem 0 2rem;
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

export const AccordionDetails = styled(motion.div)`
  display: flex;
  flex-flow: column;
  color: ${Colors.blueLight};
  padding: 3rem 3rem 7rem 3rem;
`;
