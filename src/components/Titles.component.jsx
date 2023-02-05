import styled from 'styled-components';
import { Colors } from '../styles/variables';
import { normalAnimation, show } from '../styles/animation';
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
