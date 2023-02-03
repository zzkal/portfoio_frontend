import { useState, useEffect, useRef } from 'react';
import ContentBox from '../content-box/ContentBox.component';
import { Title1 } from '../Titles.component';
import { ExpertiseSection } from './expertise.styles';

const Expertise = () => {
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
    <ExpertiseSection ref={secRef}>
      <Title1 animate={startAnimation}>Expertise</Title1>
      <ContentBox animate={startAnimation} />
      <ContentBox animate={startAnimation} />
    </ExpertiseSection>
  );
};

export default Expertise;
