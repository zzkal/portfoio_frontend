import { useState, Fragment, useContext } from 'react';
import { Title1 } from '../Titles.component';
import { Waypoint } from 'react-waypoint';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { ProjectConainer } from './projects.styles';
import Carrrousel from '../carrousel/carrousel.component';
import { DataContext } from '../../context/DataContext';

const Projects = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { projects } = useContext(DataContext);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <ProjectConainer
        initial={{ height: '100vh' }}
        animate={{ height: 'auto' }}
        transition={{ duration: 0.5 }}
        id='projects'
      >
        {startAnimation && (
          <Fragment>
            <Title1
              pl='2rem'
              pr='2rem'
              weight={TextWeight.bold}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              Projects
            </Title1>
            <Carrrousel projects={projects} />
          </Fragment>
        )}
      </ProjectConainer>
    </Waypoint>
  );
};

export default Projects;
