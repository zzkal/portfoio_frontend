import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as GHIcon } from '../../assets/githubicon.svg';
import { ReactComponent as LIcon } from '../../assets/open.svg';
import { TextSize } from '../../styles/text-variables/text-size';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Colors } from '../../styles/variables';

export const ContentCard = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: start;
  border-radius: 30px;
  height: 55rem;
  background-color: ${Colors.blueDark};
  box-shadow: -1px 21px 22px -16px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: -1px 21px 22px -16px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: -1px 21px 22px -16px rgba(0, 0, 0, 0.71);

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    width: 35rem;
  }
  @media screen and (min-width: 1200px) {
    width: 40rem;
    transition: all 0.25s ease-in-out;

    &:hover {
      transform: translateY(-2rem);
    }
  }
`;

export const InnerCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  height: 100%;
  padding: 3rem 3rem 2rem 3rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: flex-end;
  flex-grow: 2;
  padding-top: 3rem;
`;

export const GitHubIcon = styled(GHIcon)`
  fill: ${({ isDark }) => (isDark ? Colors.blueDark : Colors.blueLight)};
  margin-left: 2rem;
  height: 32px;
  width: 32px;
`;
export const LaunchIcon = styled(LIcon)`
  fill: ${Colors.blueLight};
  margin-left: 2rem;
  height: 32px;
  width: 32px;
`;

export const Button = styled(NavLink)`
  flex-grow: 2;
  height: 4rem;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${TextSize.small};
  font-weight: ${TextWeight.bold};
  background-color: ${Colors.redLigth};
  color: ${Colors.blueDark};
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${Colors.blueLight};
  }
`;
