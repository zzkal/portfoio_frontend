import styled from 'styled-components';
import { ReactComponent as LInIcon } from '../../assets/linkedIn.svg';
import { ReactComponent as Stackicon } from '../../assets/stackoverflow.svg';
import { ReactComponent as GHIcon } from '../../assets/githubicon.svg';
import { Colors } from '../../styles/variables';
import { motion } from 'framer-motion';

export const ContactSection = styled(motion.section)`
  background-color: ${Colors.blueDark};
  margin-top: 20rem;
  padding: 0rem 2rem 2rem 2rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin-top: 6rem;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  background-color: #242b36;
  border: 1px solid ${Colors.blueLight};
  border-radius: 10px;
  margin: 0.5rem;
`;

export const LinkedInIcon = styled(LInIcon)`
  fill: ${Colors.blueLight};
  height: 32px;
  width: 32px;
`;
export const StackIcon = styled(Stackicon)`
  fill: ${Colors.blueLight};
  height: 32px;
  width: 32px;
`;

export const GitHubIcon = styled(GHIcon)`
  fill: ${({ isDark }) => (isDark ? Colors.blueDark : Colors.blueLight)};
  height: 32px;
  width: 32px;
`;
