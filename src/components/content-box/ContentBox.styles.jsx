import styled, { keyframes } from 'styled-components';
import { Colors } from '../../styles/variables';
import { showAndMoveUp } from '../../styles/animation';
import { motion } from 'framer-motion';

export const ContentBoxDiv = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  padding: 3rem;
  border-radius: 30px;
  background-color: ${Colors.blueDark};
  margin-top: 10rem;

  @media screen and (min-height: 700px) and (max-height: 900px) {
    margin-top: 12rem;
  }

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    width: 30rem;
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0;
    width: 60rem;
    transition: all 0.25s ease-in-out;

    &:hover {
      transform: translate(1rem, -2rem);
      box-shadow: -2px 8px 8px -1px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: -2px 8px 8px -1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -2px 8px 8px -1px rgba(0, 0, 0, 0.75);
    }
  }
`;
