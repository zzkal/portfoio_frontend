import {
  SmallText,
  PresentationContainer,
  BigText,
  MediumText,
  TitleContainer,
} from './presentation.styles';

const Presentation = () => {
  return (
    <PresentationContainer>
      <TitleContainer>
        <SmallText>Hi, i am</SmallText>
        <BigText>Andres</BigText>
        <MediumText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit rem
          officia incidunt fugiat praesentium ut! Velit,
        </MediumText>
      </TitleContainer>
    </PresentationContainer>
  );
};

export default Presentation;
