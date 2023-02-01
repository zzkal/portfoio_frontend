import {
  SmallText,
  PresentationContainer,
  BigText,
  MediumText,
  TitleContainer,
  DoubleArrowIcon,
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
      <DoubleArrowIcon />
    </PresentationContainer>
  );
};

export default Presentation;
