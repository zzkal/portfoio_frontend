import { MainImage } from '../Images.styles';
import { PresentationContainer } from './presentation.styles';
import Image1 from '../../assets/img/man_portrait.jpeg';
import { Title1, Title4, Title5 } from '../Titles.component';
import { Colors } from '../../styles/variables';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Paragraph } from '../paragraphs.styles';

const Presentation = () => {
  return (
    <PresentationContainer>
      <Title1
        color={Colors.blueDark}
        weight={TextWeight.bold}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Andrés
      </Title1>

      <Title4
        color={Colors.blueDark}
        weight={TextWeight.bold}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Full Stack Developer & Data Scientist
      </Title4>
      <MainImage
        src={Image1}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <Paragraph
        color={Colors.blueDark}
        weight={TextWeight.regular}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        size='1.5rem'
        pt='1rem'
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit rem
        officia incidunt fugiat praesentium ut! Velit,
      </Paragraph>
    </PresentationContainer>
  );
};

export default Presentation;
