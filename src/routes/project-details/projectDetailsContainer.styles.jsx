import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: 6rem;

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`;

export const HeaderProjectImage = styled(motion.div)`
  position: relative;
  height: 60vh;
  min-width: 100%;
  background: rgb(27, 31, 38);
  background-image: ${({ imgUrl }) =>
    `linear-gradient(90deg, rgba(27,31,38,0.8) 0%, rgba(9,9,121,0.8) 35%),  url(${imgUrl})`};
`;
