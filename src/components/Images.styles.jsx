import { motion } from 'framer-motion';
import styled from 'styled-components';
import { show } from '../styles/animation';

export const MainImage = styled(motion.img)`
  width: 100%;
  margin-top: 1rem;
  /* box-shadow: -4px 3px 0px 1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -4px 3px 0px 1px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 3px 0px 1px rgba(0, 0, 0, 1); */
`;

export const CardImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
