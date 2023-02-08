import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors } from '../../styles/variables';

export const SectionContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  position: relative;
  padding: 0 2rem 10rem 2rem;
  margin-top: 8rem;
`;

export const AboutMeSection = styled(motion.section)`
  display: flex;
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
  flex-flow: column;
  height: 100vh;
  justify-content: center;
  background-color: ${Colors.blueDark};
  padding: 35% 2rem 35% 2rem;
  margin-top: 20rem;
`;
