import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ListMenuContainer, ListMenuItem } from '../Lists.styled';
import { DrawerContainer } from './drawer.styles';
import { DrawerContext } from '../../context/DrawerContext.context';
import { AnimatePresence, motion } from 'framer-motion';
import { HamburguerContainer } from '../navigation/navigation.styles';
import { Link, useLocation } from 'react-router-dom';
import { SectionIdContext } from '../../context/SectionId.context';

const variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Drawer = () => {
  let location = useLocation();
  const { setIsDrawerOpen, isDrawerOpen } = useContext(DrawerContext);
  const { setSectionId } = useContext(SectionIdContext);

  const handleHamburguer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const setSectionIdHandler = (id) => setSectionId(id);

  const content = (
    <AnimatePresence initial={false}>
      {isDrawerOpen && (
        <DrawerContainer
          key='Drawer'
          variants={variants}
          initial={variants.hidden}
          animate={variants.visible}
          exit={variants.hidden}
          transition={{ duration: 0.25 }}
        >
          <HamburguerContainer
            onClick={handleHamburguer}
            isopen={isDrawerOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <motion.span
              initial={{ translateY: 0, rotate: 0 }}
              animate={{ translateY: 12.5, rotate: 45 }}
              transition={{ duration: 0.1 }}
            ></motion.span>
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.25 }}
            ></motion.span>
            <motion.span
              initial={{ translateY: 0, rotate: 0 }}
              animate={{ translateY: -12.5, rotate: -45 }}
              transition={{ duration: 0.1 }}
            ></motion.span>
          </HamburguerContainer>

          <ListMenuContainer>
            {location.pathname !== '/' && (
              <ListMenuItem
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.25 }}
                onClick={handleHamburguer}
              >
                <Link to='/'>Home</Link>
              </ListMenuItem>
            )}
            <ListMenuItem
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.25 }}
              onClick={handleHamburguer}
            >
              <Link to='/' onClick={() => setSectionIdHandler('projects')}>
                Projects
              </Link>
            </ListMenuItem>
            <ListMenuItem
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.45 }}
              onClick={handleHamburguer}
            >
              <Link
                to='/'
                onClick={() => setSectionIdHandler('work-experience')}
              >
                Work Experience
              </Link>
            </ListMenuItem>
            <ListMenuItem
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.65 }}
              onClick={handleHamburguer}
            >
              <Link to='/' onClick={() => setSectionIdHandler('contact')}>
                Contact
              </Link>
            </ListMenuItem>
            <ListMenuItem
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: 0.85 }}
              onClick={handleHamburguer}
            >
              <a href='#'> Resume</a>
            </ListMenuItem>
          </ListMenuContainer>
        </DrawerContainer>
      )}
    </AnimatePresence>
  );
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default Drawer;
