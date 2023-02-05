import { useState, useEffect, useRef, Fragment } from 'react';
import { Title1 } from '../Titles.component';
import { Waypoint } from 'react-waypoint';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { ProjectConainer } from './projects.styles';
import Carrrousel from '../carrousel/carrousel.component';

const Projects = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <ProjectConainer>
        {startAnimation && (
          <Fragment>
            <Title1
              pl='2rem'
              pr='2rem'
              weight={TextWeight.bold}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Projects
            </Title1>
            <Carrrousel />
          </Fragment>
        )}
      </ProjectConainer>
    </Waypoint>
  );
};

export default Projects;
