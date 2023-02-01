import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  LightModeIcon,
  DarkModeIcon,
  HamburguerContainer,
} from './navigation.styles';

const Navigation = ({ isScrollDown, positionY }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMode = () => setIsDarkMode(!isDarkMode);

  const handleHamburguer = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <NavigationContainer isScrollDown={isScrollDown} positionY={positionY}>
        <HamburguerContainer
          onClick={handleHamburguer}
          isOpen={isOpen}
          positionY={positionY}
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburguerContainer>
        {isDarkMode ? (
          <LightModeIcon onClick={handleMode} positionY={positionY} />
        ) : (
          <DarkModeIcon onClick={handleMode} positionY={positionY} />
        )}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
