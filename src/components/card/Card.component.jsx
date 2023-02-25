import { Paragraph } from '../paragraphs.styles';
import { Title4 } from '../Titles.component';
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

const Card = ({
  project: { id, name, shortDesc, repoLink, appLink, imgUrl },
}) => {
  return (
    <ContentCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.25 }}
    >
      <CardImage src={`https://www.andres-dev-portfolio.site${imgUrl}`} />
      <InnerCardContainer>
        <Title4 weight={TextWeight.bold} color={Colors.redLigth}>
          {name}
        </Title4>
        <Paragraph pt='2rem' size='1.5rem' color={Colors.blueLight}>
          {shortDesc}
        </Paragraph>
        <IconsContainer>
          <Button to={`/project/${id}`}>know more</Button>
          <a href={repoLink} target='_blank'>
            <GitHubIcon />
          </a>
          <a href={appLink} target='_blank'>
            <LaunchIcon />
          </a>
        </IconsContainer>
      </InnerCardContainer>
    </ContentCard>
  );
};

export default Card;
