import styled from 'styled-components';
import { Colors } from '../styles/variables';
import { normalAnimation } from '../styles/animation';
import { TextSize } from '../styles/text-variables/text-size';
import { TextWeight } from '../styles/text-variables/text-weight';
import { motion } from 'framer-motion';

export const Paragraph = styled(motion.p)`
  ${({ size, weignt, color, pt }) => {
    return `
      font-size: ${size || TextSize.medium};
      font-weight: ${weignt || TextWeight.regular};
      padding-top: ${pt || '0'};
      color: ${color || Colors.blueDark};
    `;
  }}
`;
