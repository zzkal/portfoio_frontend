import { MainImage, MainCover } from '../Images.styles';
import { SimpleParagraph } from '../paragraphs.styles';
import { Title1 } from '../Titles.component';
import { SectionContainer } from './about.styles';

import Image1 from '../../assets/img/img1.jpg';

const About = () => {
  return (
    <SectionContainer>
      <Title1>About me</Title1>
      <SimpleParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
        voluptates sunt. Consequatur corporis accusantium laudantium sapiente
        tempore vel, neque autem eum esse pariatur, quia hic! Ab eum nesciunt
        non quos?
      </SimpleParagraph>
      <MainImage src={Image1} />
    </SectionContainer>
  );
};

export default About;
