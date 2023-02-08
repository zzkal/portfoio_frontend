import { useState, Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { AccordionContainer } from '../accordion/accordion.styles';
import AccordionItem from '../accordion/AccordionItem.component';
import { Title1 } from '../Titles.component';
import { JobContainer } from './job.styles';

const Job = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <JobContainer>
        {startAnimation && (
          <Fragment>
            <Title1
              weight={TextWeight.bold}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              Work Experience
            </Title1>
            <AccordionContainer>
              <AccordionItem />
              <AccordionItem />
              <AccordionItem />
            </AccordionContainer>
          </Fragment>
        )}
      </JobContainer>
    </Waypoint>
  );
};
export default Job;
