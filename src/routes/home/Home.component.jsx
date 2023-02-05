import Presentation from '../../components/sections/Presentation.component';
import About from '../../components/sections/About.component';
import { HomePage } from './home.styles';
import Expertise from '../../components/sections/Expertise.component';
import Projects from '../../components/sections/Projects.component';
import Job from '../../components/sections/Job.component';

const Home = () => {
  return (
    <HomePage>
      <Presentation />
      <About />
      <Expertise />
      <Projects />
      <Job />
    </HomePage>
  );
};

export default Home;
