import { Paragraph } from '../paragraphs.styles';
import { Title4 } from '../Titles.component';
import ProjectImage from '../../assets/img/project.jpg';
import {
  Button,
  ContentCard,
  GitHubIcon,
  IconsContainer,
  LaunchIcon,
  InnerCardContainer,
} from './card.styles';
import { Colors } from '../../styles/variables';
import { CardImage } from '../Images.styles';
import { TextWeight } from '../../styles/text-variables/text-weight';

const Card = () => {
  return (
    <ContentCard
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CardImage src={ProjectImage}></CardImage>
      <InnerCardContainer>
        <Title4 weight={TextWeight.bold} color={Colors.redLigth}>
          Project name
        </Title4>
        <Paragraph pt='2rem' size='1.5rem' color={Colors.blueLight}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          cupiditate in nam debitis voluptate aliquid sed fugit fuga
        </Paragraph>
        <IconsContainer>
          <GitHubIcon />
          <LaunchIcon />
          <Button href='#'>know more</Button>
        </IconsContainer>
      </InnerCardContainer>
    </ContentCard>
  );
};

export default Card;
