import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MainImage = styled(motion.img)`
  max-width: 100%;
  margin-top: 1rem;

  @media screen and (min-width: 1200px) {
    clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  }
`;

export const CardImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ProjectImage = styled(motion.img)`
  width: 100%;
  margin-top: 2rem;

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;
