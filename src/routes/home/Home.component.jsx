import Presentation from '../../components/sections/Presentation.component';
import About from '../../components/sections/About.component';
import { HomePage } from './home.styles';

const Home = () => {
  return (
    <HomePage>
      <Presentation />
      <About />
    </HomePage>
  );
};

export default Home;
