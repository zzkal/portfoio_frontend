import { MainImage } from '../Images.styles';
import {
  PresentationContainer,
  BigText,
  MediumText,
  TitleContainer,
  SmallText,
} from './presentation.styles';
import Image1 from '../../assets/img/man_portrait.jpeg';

const Presentation = () => {
  return (
    <PresentationContainer>
      <TitleContainer>
        <BigText>Andrés</BigText>
        <MediumText>Full Stack Developer & Data Scientist</MediumText>
        <MainImage src={Image1} />
        <SmallText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit rem
          officia incidunt fugiat praesentium ut! Velit,
        </SmallText>
      </TitleContainer>
    </PresentationContainer>
  );
};

export default Presentation;
