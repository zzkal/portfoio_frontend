import { AboutMeSection, Divider } from './about.styles';
import { Waypoint } from 'react-waypoint';
import { Fragment, useState } from 'react';
import Button from '../button/Button.component';
import { Title1, Title2 } from '../Titles.component';
import { Colors } from '../../styles/variables';
import { Paragraph } from '../paragraphs.styles';
import { TextSize } from '../../styles/text-variables/text-size';

const About = ({ adata: { description } }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <AboutMeSection>
        {startAnimation && (
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
              {description}
            </Paragraph>
          </Fragment>
        )}
      </AboutMeSection>
    </Waypoint>
  );
};

export default About;
