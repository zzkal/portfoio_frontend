import { SectionContainer } from './about.styles';
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import Button from '../button/Button.component';

const About = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <SectionContainer>
        {startAnimation && <Button text='About me' />}
      </SectionContainer>
    </Waypoint>
  );
};

export default About;
