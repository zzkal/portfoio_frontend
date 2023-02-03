import Presentation from '../../components/sections/Presentation.component';
import About from '../../components/sections/About.component';
import { HomePage } from './home.styles';
import Expertise from '../../components/sections/Expertise.component';

const Home = () => {
  return (
    <HomePage>
      <Presentation />
      <About />
      <Expertise />
    </HomePage>
  );
};

export default Home;
