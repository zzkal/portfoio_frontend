import { Fragment, useContext } from 'react';
import Presentation from '../../components/sections/Presentation.component';
import About from '../../components/sections/About.component';
import { HomePage } from './home.styles';
import Expertise from '../../components/sections/Expertise.component';
import Projects from '../../components/sections/Projects.component';
import Job from '../../components/sections/Job.component';
import Contact from '../../components/sections/contact.component';
import Footer from '../../components/sections/Footer.component';

import { DataContext } from '../../context/DataContext';

const Home = () => {
  const { isLoading } = useContext(DataContext);

  return (
    <>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <Fragment>
          <HomePage>
            <Presentation />
            <About />
            <Expertise />
            <Projects />
            <Job />
            <Contact />
          </HomePage>
          <Footer />
        </Fragment>
      )}
    </>
  );
};

export default Home;
