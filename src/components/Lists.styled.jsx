import styled, { keyframes } from 'styled-components';
import { Colors } from '../styles/variables';
import { show } from '../styles/animation';
import { motion } from 'framer-motion';

export const List1 = styled.ul`
  padding-top: 3rem;
  & > li {
    color: ${Colors.blueLight};
    font-size: 1.5rem;
    font-weight: 400;
    list-style: inside;
    text-align: justify;
  }
`;
export const List2 = styled.ul`
  & > li {
    color: ${Colors.blueDark};
    font-size: 2rem;
    font-weight: 400;
    list-style: inside;
    text-align: justify;
  }
`;

export const ListMenuContainer = styled(motion.ul)`
  display: flex;
  flex-flow: column;
  justify-content: start;
  position: absolute;
  top: 50vh;
  left: 2rem;
  list-style: none;
  transform: translateY(-50%);
`;

export const ListMenuItem = styled(motion.li)`
  display: block;
  padding: 2rem;

  & > a {
    color: ${Colors.blueLight};
    font-size: 2rem;
    text-decoration: none;
  }
`;
