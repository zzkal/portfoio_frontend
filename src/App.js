import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation.component';
import Home from './routes/home/Home.component';
import Drawer from './components/drawer/Drawer.component';

function App() {
  const [isScrollDown, setisScrollDown] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

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

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Navigation isScrollDown={isScrollDown} positionY={scrollTop} />
        }
      >
        <Route
          index
          element={
            <>
              <Drawer />
              <Home />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
