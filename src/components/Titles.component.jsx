import styled from 'styled-components';
import { Colors } from '../styles/variables';
import { TextSize } from '../styles/text-variables/text-size';
import { TextWeight } from '../styles/text-variables/text-weight';
import { motion } from 'framer-motion';

export const Title1 = styled(motion.h1)`
  ${({ weight, color, mt, size, pl, pr }) => {
    return `
      font-weight: ${weight || TextWeight.regular};
      color: ${color || Colors.blueDark};
      margin-top: ${mt || '0'};
      font-size: ${size || TextSize.xxl};

    `;
  }}

  @media screen and (min-width: 1200px) {
    text-align: ${({ textalignleft }) => (textalignleft ? 'left' : 'center')};
    font-size: 9rem;
  }
`;

export const Title2 = styled(motion.h2)`
  ${({ weight, color, mt, size }) => {
    return `
      font-weight: ${weight || TextWeight.regular};
      color: ${color || Colors.blueDark};
      margin-top: ${mt || '1rem'};
      font-size: ${size || TextSize.large};
    `;
  }}
`;

export const Title3 = styled(motion.h3)`
  ${({ weight, color, mt, size }) => {
    return `
      font-weight: ${weight || TextWeight.regular};
      color: ${color || Colors.blueDark};
      margin-top: ${mt || '1rem'};
      font-size: ${size || TextSize.large};
    `;
  }}

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`;

export const Title4 = styled(motion.h4)`
  margin-top: ${({ mt }) => mt || '1rem'};
  ${({ weight, color, mt, size }) => {
    return `
      font-weight: ${weight || TextWeight.regular};
      color: ${color || Colors.blueDark};
      margin-top: ${mt || '1rem'};
      font-size: ${size || TextSize.medium};
    `;
  }}

  @media screen and (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

export const Title5 = styled(motion.h5)`
  display: inline-block;
  ${({ weight, color, mt, size, mr }) => {
    return `
      font-weight: ${weight || TextWeight.regular};
      color: ${color || Colors.blueDark};
      margin-top: ${mt || '1rem'};  
      margin-right: ${mr || '1rem'};
      font-size: ${size || TextSize.small};
    `;
  }}
`;

export const Title6 = styled(motion.h6)`
  ${({ weight, color, mt, size }) => {
    return `
      font-weight: ${weight || TextWeight.regular};
      color: ${color || Colors.blueDark};
      margin-top: ${mt || '1rem'};
      font-size: ${size || TextSize.mini};

    `;
  }}
`;

export const TitleProjects = styled(motion.h2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  ${({ weight, color, mt, size, pl, pr }) => {
    return `
      font-weight: ${weight || TextWeight.regular};
      color: ${color || Colors.blueDark};
      margin-top: ${mt || '0'};
      font-size: ${size || TextSize.xxl};

    `;
  }}

  @media screen and (min-width: 1200px) {
    text-align: ${({ textalignleft }) => (textalignleft ? 'left' : 'center')};
    font-size: 9rem;
  }
`;
