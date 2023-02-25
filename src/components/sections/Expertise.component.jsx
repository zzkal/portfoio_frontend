import { useState, Fragment, useContext } from 'react';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Waypoint } from 'react-waypoint';
import ContentBox from '../content-box/ContentBox.component';
import { Title1 } from '../Titles.component';
import { ExpertiseSection, GridContainer } from './expertise.styles';
import { DataContext } from '../../context/DataContext';

const Expertise = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { expertise } = useContext(DataContext);

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
              textalignleft='false'
            >
              Expertise
            </Title1>
            {window.innerWidth > 700 ? (
              <GridContainer>
                {expertise.map((el) => {
                  return <ContentBox key={el.id} edata={el} />;
                })}
              </GridContainer>
            ) : (
              expertise.map((el) => {
                return <ContentBox key={el.id} edata={el} />;
              })
            )}
          </Fragment>
        )}
      </ExpertiseSection>
    </Waypoint>
  );
};

export default Expertise;
