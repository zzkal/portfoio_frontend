import { useState, useContext, Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { DrawerContext } from '../../context/DrawerContext.context';
import { SectionIdContext } from '../../context/SectionId.context';
import {
  NavigationContainer,
  LightModeIcon,
  DarkModeIcon,
  HamburguerContainer,
  NavigationTitles,
  NavTitle,
} from './navigation.styles';

const Navigation = ({ isscrolldown, positiony }) => {
  const { setIsDrawerOpen, isDrawerOpen } = useContext(DrawerContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setSectionId } = useContext(SectionIdContext);

  const handleMode = () => setIsDarkMode(!isDarkMode);

  const handleHamburguer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const setSectionIdHandler = (id) => setSectionId(id);

  return (
    <Fragment>
      <NavigationContainer isscrolldown={isscrolldown} positiony={positiony}>
        {window.innerWidth < 1200 ? (
          <Fragment>
            <HamburguerContainer
              onClick={handleHamburguer}
              isopen={isDrawerOpen}
              positiony={positiony}
            >
              <span></span>
              <span></span>
              <span></span>
            </HamburguerContainer>
            {isDarkMode ? (
              <LightModeIcon onClick={handleMode} positiony={positiony} />
            ) : (
              <DarkModeIcon onClick={handleMode} positiony={positiony} />
            )}
          </Fragment>
        ) : (
          <Fragment>
            <NavigationTitles isscrolldown={isscrolldown} positiony={positiony}>
              <NavTitle to='/' onClick={() => setSectionIdHandler('projects')}>
                Projects
              </NavTitle>
              <NavTitle
                to='/'
                onClick={() => setSectionIdHandler('work-experience')}
              >
                Work Experience
              </NavTitle>
              <NavTitle to='/' onClick={() => setSectionIdHandler('contact')}>
                Contact
              </NavTitle>
            </NavigationTitles>
          </Fragment>
        )}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
