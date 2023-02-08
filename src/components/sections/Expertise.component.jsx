import { useState, useEffect, useRef, Fragment } from 'react';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Waypoint } from 'react-waypoint';
import ContentBox from '../content-box/ContentBox.component';
import { Title1 } from '../Titles.component';
import { SectionContainer } from './about.styles';
import { ExpertiseSection } from './expertise.styles';

const Expertise = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <ExpertiseSection>
        {startAnimation && (
          <Fragment>
            <Title1
              weight={TextWeight.bold}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              Expertise
            </Title1>
            <ContentBox />
          </Fragment>
        )}
      </ExpertiseSection>
    </Waypoint>
  );
};

export default Expertise;
