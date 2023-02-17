import {
  AccordionHeader,
  PlusIcon,
  AccordionDetails,
  PlaceIcon,
  LessIcon,
  AccordiontDetailsContainer,
} from './accordion.styles';
import { Title3, Title4, Title5, Title6 } from '../Titles.component';
import { Colors } from '../../styles/variables';
import { List1 } from '../Lists.styled';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Fragment, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const AccordionItem = ({
  job: { companyName, location, initDate, endDate, tasks, stack },
}) => {
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
        <Title3 weight={TextWeight.bold}>{companyName}</Title3>
        {isOpen ? <LessIcon /> : <PlusIcon />}
      </AccordionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <AccordiontDetailsContainer
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
              <Title4 color={Colors.blueLight}>{companyName}</Title4>
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
                {initDate} - {endDate}
              </Title6>
              <List1>
                {tasks.map(({ id, description }) => (
                  <li key={id}>{description}</li>
                ))}
              </List1>
              <div style={{ marginTop: '3rem' }}>
                {stack.map(({ id, skillName }) => (
                  <Title5
                    key={id}
                    weight={TextWeight.bold}
                    color={Colors.redLigth}
                  >
                    {skillName}
                  </Title5>
                ))}
              </div>
            </AccordionDetails>
          </AccordiontDetailsContainer>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
export default AccordionItem;
