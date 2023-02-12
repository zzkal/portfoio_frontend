import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors } from '../../styles/variables';

export const DrawerContainer = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: ${Colors.blueDark};
  display: flex;
  flex-flow: column;
  justify-content: start;
  position: fixed;
  z-index: 51;
  padding: 2rem;
`;
