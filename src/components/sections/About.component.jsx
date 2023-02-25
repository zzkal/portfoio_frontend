import { AboutMeSection } from './about.styles';
import { Waypoint } from 'react-waypoint';
import { Fragment, useContext, useState } from 'react';
import { Title1 } from '../Titles.component';
import { Colors } from '../../styles/variables';
import { Paragraph } from '../paragraphs.styles';
import { TextSize } from '../../styles/text-variables/text-size';
import { DataContext } from '../../context/DataContext';

const About = () => {
  const { about } = useContext(DataContext);
  const [startAnimation, setStartAnimation] = useState(false);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <AboutMeSection>
        {startAnimation &&
          (window.innerWidth < 1200 ? (
            <Fragment>
              <Title1
                color={Colors.redLigth}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                About Me
              </Title1>
              <Paragraph
                color={Colors.blueLight}
                size={TextSize.small}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {about.description}
              </Paragraph>
            </Fragment>
          ) : (
            <Fragment>
              <div>
                <Title1
                  color={Colors.redLigth}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  About Me
                </Title1>
              </div>
              <div style={{ width: '50rem' }}>
                <Paragraph
                  color={Colors.blueLight}
                  size={TextSize.small}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {about.description}
                </Paragraph>
              </div>
            </Fragment>
          ))}
      </AboutMeSection>
    </Waypoint>
  );
};

export default About;
