import { useState, Fragment, useContext } from 'react';
import { Waypoint } from 'react-waypoint';
import { DataContext } from '../../context/DataContext';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { AccordionContainer } from '../accordion/accordion.styles';
import AccordionItem from '../accordion/AccordionItem.component';
import { Title1 } from '../Titles.component';
import { JobContainer } from './job.styles';

const Job = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { jobs } = useContext(DataContext);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <JobContainer id='work-experience'>
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
              {jobs.map((job) => (
                <AccordionItem key={job.id} job={job} />
              ))}
            </AccordionContainer>
          </Fragment>
        )}
      </JobContainer>
    </Waypoint>
  );
};
export default Job;
