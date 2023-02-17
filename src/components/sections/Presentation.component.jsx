import { MainImage } from '../Images.styles';
import { PresentationContainer } from './presentation.styles';
import { Title1, Title4 } from '../Titles.component';
import { Colors } from '../../styles/variables';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Paragraph } from '../paragraphs.styles';

import myImage from '../../assets/img/man_portrait.jpeg';

const Presentation = ({ pdata: { name, description, career, imgUrl } }) => {
  return (
    <PresentationContainer>
      <Title1
        color={Colors.blueDark}
        weight={TextWeight.bold}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {name}
      </Title1>

      <Title4
        color={Colors.blueDark}
        weight={TextWeight.bold}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {career}
      </Title4>
      <MainImage
        src={myImage}
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
        {description}
      </Paragraph>
    </PresentationContainer>
  );
};

export default Presentation;
