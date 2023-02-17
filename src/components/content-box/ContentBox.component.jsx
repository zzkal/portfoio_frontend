import { Paragraph } from '../paragraphs.styles';
import { Title3 } from '../Titles.component';
import { List1 } from '../Lists.styled';
import { ContentBoxDiv } from './ContentBox.styles';
import { Colors } from '../../styles/variables';

const ContentBox = ({ edata: { field, description, stack } }) => {
  return (
    <ContentBoxDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Title3 size='2.5rem' color={Colors.redLigth}>
        {field}
      </Title3>
      <Paragraph size='1.5rem' pt='2rem' color={Colors.blueLight}>
        {description}
      </Paragraph>
      <List1>
        {stack.map(({ id, skillName }) => (
          <li key={id}>{skillName}</li>
        ))}
      </List1>
    </ContentBoxDiv>
  );
};
export default ContentBox;
