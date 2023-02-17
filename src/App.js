import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, Fragment, useContext } from 'react';
import Navigation from './components/navigation/Navigation.component';
import Home from './routes/home/Home.component';
import Drawer from './components/drawer/Drawer.component';
import ProjectDetailsPage from './routes/project-details/ProjectDetailsPage.component';
import { SectionIdContext } from './context/SectionId.context';

function App() {
  const [isScrollDown, setisScrollDown] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const { sectionId, setSectionId } = useContext(SectionIdContext);

  useEffect(() => {
    const handleScroll = (e) => {
      let top = window.scrollY;
      if (top > 50) {
        if (scrollTop > top) {
          setisScrollDown(false);
        } else {
          setisScrollDown(true);
        }
      }
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  useEffect(() => {
    if (sectionId) {
      document.getElementById(sectionId).scrollIntoView();
    }

    return () => setSectionId('');
  }, [sectionId]);

  return (
    <Fragment>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Drawer />
              <Navigation isScrollDown={isScrollDown} positionY={scrollTop} />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path='/project/:pid' element={<ProjectDetailsPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
