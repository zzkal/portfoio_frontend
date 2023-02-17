import { Fragment, useState, useEffect } from 'react';
import Presentation from '../../components/sections/Presentation.component';
import About from '../../components/sections/About.component';
import { HomePage } from './home.styles';
import Expertise from '../../components/sections/Expertise.component';
import Projects from '../../components/sections/Projects.component';
import Job from '../../components/sections/Job.component';
import Contact from '../../components/sections/contact.component';
import Footer from '../../components/sections/Footer.component';

import data_portfolio from '../../data/data';

const Home = () => {
  return (
    <Fragment>
      <HomePage>
        <Presentation pdata={data_portfolio.profile} />
        <About adata={data_portfolio.about} />
        <Expertise edata={data_portfolio.expertise} />
        <Projects projdata={data_portfolio.projects} />
        <Job jdata={data_portfolio.workExperience} />
        <Contact cdata={data_portfolio.contact} />
      </HomePage>
      <Footer />
    </Fragment>
  );
};

export default Home;
