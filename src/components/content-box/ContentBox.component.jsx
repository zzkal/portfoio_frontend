import { Paragraph } from '../paragraphs.styles';
import { Title3 } from '../Titles.component';
import { List1 } from '../Lists.styled';
import { ContentBoxDiv } from './ContentBox.styles';
import { Colors } from '../../styles/variables';
import { useEffect, useState } from 'react';

const ContentBox = ({ edata: { field, description, stack } }) => {
  const [stackArray, setStackArray] = useState([]);

  useEffect(() => {
    let arr = [];
    const fetchStack = () => {
      stack.map(async (route) => {
        const res = await fetch('https://andres-dev-portfolio.site' + route);
        const data = await res.json();
        arr.push(data.name);
        setStackArray(arr);
      });
    };
    fetchStack();
  }, [stack]);

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
        {stackArray.map((e) => (
          <li key={stackArray.indexOf(e)}>{e}</li>
        ))}
      </List1>
    </ContentBoxDiv>
  );
};
export default ContentBox;
