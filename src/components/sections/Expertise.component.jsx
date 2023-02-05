import { useState, useEffect, useRef, Fragment } from 'react';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Waypoint } from 'react-waypoint';
import ContentBox from '../content-box/ContentBox.component';
import { Title1 } from '../Titles.component';
import { SectionContainer } from './about.styles';

const Expertise = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <SectionContainer>
        {startAnimation && (
          <Fragment>
            <Title1
              weight={TextWeight.bold}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Expertise
            </Title1>
            <ContentBox />
          </Fragment>
        )}
      </SectionContainer>
    </Waypoint>
  );
};

export default Expertise;
