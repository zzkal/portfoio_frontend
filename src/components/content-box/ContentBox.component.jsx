import { Paragraph } from '../paragraphs.styles';
import { Title3 } from '../Titles.component';
import { List1 } from '../Lists.styled';
import { ContentBoxDiv } from './ContentBox.styles';
import { Colors } from '../../styles/variables';

const ContentBox = () => {
  return (
    <ContentBoxDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title3 size='2.5rem' color={Colors.redLigth}>
        Web Development
      </Title3>
      <Paragraph size='1.5rem' pt='2rem' color={Colors.blueLight}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur
        dolor facilis nemo dicta sit consequatur pariatur cum veritatis, eum
        sint officiis rem placeat. Adipisci perferendis eaque sunt omnis sint?
      </Paragraph>
      <List1>
        <li>MongoDB</li>
        <li>ExpressJS</li>
        <li>React</li>
        <li>NodeJS</li>
      </List1>
    </ContentBoxDiv>
  );
};
export default ContentBox;
