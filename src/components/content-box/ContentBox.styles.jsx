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
`;
