import {
  AccordionHeader,
  PlusIcon,
  AccordionDetails,
  PlaceIcon,
  LessIcon,
} from './accordion.styles';
import { Title3, Title4, Title5, Title6 } from '../Titles.component';
import { Colors } from '../../styles/variables';
import { List1 } from '../Lists.styled';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const AccordionItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAccordion = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <AccordionHeader
        onClick={handleOpenAccordion}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <Title3 weight={TextWeight.bold}>Facebook</Title3>
        {isOpen ? <LessIcon /> : <PlusIcon />}
      </AccordionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ backgroundColor: Colors.blueDark }}
          >
            <AccordionDetails
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.25 }}
            >
              <Title4 color={Colors.blueLight}>Facebook Co.</Title4>
              <div style={{ marginTop: '3rem' }}>
                <PlaceIcon />
                <Title5
                  color={Colors.blueLight}
                  mt='2rem'
                  weight={TextWeight.regular}
                  size='1.75rem'
                >
                  USA
                </Title5>
              </div>
              <Title6
                color={Colors.blueLight}
                weight={TextWeight.regular}
                size='1.75rem'
              >
                2022 - present
              </Title6>
              <List1>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia illo,
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam similique pariatur consectetur provident deleniti
                  ipsum consequuntur fuga recusandae beatae, optio, sit
                  voluptate,
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  ab quae, nesciunt unde doloribus temporibus impedit autem
                  itaque
                </li>
              </List1>
              <div style={{ marginTop: '3rem' }}>
                <Title5 weight={TextWeight.bold} color={Colors.redLigth}>
                  React
                </Title5>
                <Title5 weight={TextWeight.bold} color={Colors.redLigth}>
                  MongoDb
                </Title5>
                <Title5 weight={TextWeight.bold} color={Colors.redLigth}>
                  NextJS
                </Title5>
                <Title5 weight={TextWeight.bold} color={Colors.redLigth}>
                  ExpressJS
                </Title5>
              </div>
            </AccordionDetails>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
export default AccordionItem;
