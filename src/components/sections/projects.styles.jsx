import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectConainer = styled(motion.section)`
  margin-top: 15rem;
  height: 100vh;

  & > h1 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (min-height: 700px) and (max-height: 900px) {
    margin-top: 12rem;
  }
`;
