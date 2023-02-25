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

  @media screen and (min-height: 700px) and (max-height: 900px) {
    margin-top: 12rem;
  }

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    height: auto;
    padding: 35% 8rem 35% 8rem;
  }
  @media screen and (min-width: 1200px) {
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
    padding: 0;
  }
`;
