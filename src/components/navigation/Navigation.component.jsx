import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationContainer,
  LightModeIcon,
  DarkModeIcon,
  HamburguerContainer,
} from './navigation.styles';

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMode = () => setIsDarkMode(!isDarkMode);

  const handleHamburguer = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <HamburguerContainer onClick={handleHamburguer} isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburguerContainer>
        {isDarkMode ? (
          <LightModeIcon onClick={handleMode} />
        ) : (
          <DarkModeIcon onClick={handleMode} />
        )}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
