import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/navigation/Navigation.component';
import Home from './routes/home/Home.component';

function App() {
  const [isScrollDown, setisScrollDown] = useState(false);
  const [Y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.onscroll = (e) => {
        if (Y > 50) {
          if (Y > window.scrollY) {
            setisScrollDown(false);
          } else {
            setisScrollDown(true);
          }
        }

        setY(window.scrollY);
      };
    };
    handleScroll();
  }, [Y]);

  return (
    <Routes>
      <Route
        path='/'
        element={<Navigation isScrollDown={isScrollDown} positionY={Y} />}
      >
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
