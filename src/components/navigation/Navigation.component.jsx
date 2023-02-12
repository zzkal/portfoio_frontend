import { useState, useContext, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { DrawerContext } from '../../context/DrawerContext.context';
import Drawer from '../drawer/Drawer.component';
import {
  NavigationContainer,
  LightModeIcon,
  DarkModeIcon,
  HamburguerContainer,
} from './navigation.styles';

const Navigation = ({ isScrollDown, positionY }) => {
  const { setIsDrawerOpen, isDrawerOpen } = useContext(DrawerContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMode = () => setIsDarkMode(!isDarkMode);

  const handleHamburguer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Fragment>
      <NavigationContainer isScrollDown={isScrollDown} positionY={positionY}>
        <HamburguerContainer
          onClick={handleHamburguer}
          isOpen={isDrawerOpen}
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
