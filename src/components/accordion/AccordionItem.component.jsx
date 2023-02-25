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
import { Fragment, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const AccordionItem = ({
  job: { companyName, location, initDate, endDate, task, stack },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [stackArray, setStackArray] = useState([]);
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    let arr = [];
    let arrtask = [];
    stack.map(async (route) => {
      const res = await fetch('https://andres-dev-portfolio.site' + route);
      const data = await res.json();
      arr.push(data.name);
      setStackArray(arr);
    });

    task.map(async (route) => {
      const res = await fetch('https://andres-dev-portfolio.site' + route);
      const data = await res.json();
      arrtask.push(data.description);
      setTaskArray(arrtask);
    });
  }, []);

  const handleOpenAccordion = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <AccordionHeader
        onClick={handleOpenAccordion}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        isopen={isOpen}
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
                {taskArray.map((task) => (
                  <li id={taskArray.indexOf(task)}>{task}</li>
                ))}
              </List1>
              <div style={{ marginTop: '3rem' }}>
                {stackArray.map((stack) => (
                  <Title5 weight={TextWeight.bold} color={Colors.redLigth}>
                    {stack}
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
