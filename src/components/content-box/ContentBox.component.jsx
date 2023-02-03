import { Paragraph2 } from '../paragraphs.styles';
import { Title3 } from '../Titles.component';
import { List1 } from '../Lists.styled';
import { ContentBoxDiv } from './ContentBox.styles';

const ContentBox = ({ animate }) => {
  return (
    <ContentBoxDiv animate={animate}>
      <Title3 animate={animate}>Web Development</Title3>
      <Paragraph2 animate={animate}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur
        dolor facilis nemo dicta sit consequatur pariatur cum veritatis, eum
        sint officiis rem placeat. Adipisci perferendis eaque sunt omnis sint?
      </Paragraph2>
      <List1 animate={animate}>
        <li>MongoDB</li>
        <li>ExpressJS</li>
        <li>React</li>
        <li>NodeJS</li>
      </List1>
    </ContentBoxDiv>
  );
};
export default ContentBox;
