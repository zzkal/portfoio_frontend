import { MainImage } from '../Images.styles';
import { SimpleParagraph } from '../paragraphs.styles';
import { Title1 } from '../Titles.component';
import { SectionContainer } from './about.styles';

import { Fragment, useEffect, useRef, useState } from 'react';

const About = () => {
  const [t, setTop] = useState(0);
  const secRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [firstTimeShown, setFirstTimeShown] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  // secRef.current.getBoundingClientRect()

  useEffect(() => {
    const { y } = secRef.current.getBoundingClientRect();
    setTop(y);
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const { y } = secRef.current.getBoundingClientRect();

      if ((y < 720) & (y > 0) & firstTimeShown) {
        setFirstTimeShown(false);
        setStartAnimation(true);
      }
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <SectionContainer ref={secRef}>
        <Title1 animate={startAnimation}>About me</Title1>
        <SimpleParagraph animate={startAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          voluptates sunt. Consequatur corporis accusantium laudantium sapiente
          tempore vel, neque autem eum esse pariatur, quia hic! Ab eum nesciunt
          non quos?
        </SimpleParagraph>
      </SectionContainer>
    </Fragment>
  );
};

export default About;
