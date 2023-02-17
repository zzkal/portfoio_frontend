import React, { Fragment, useEffect, useContext } from 'react';
import { Title1, Title3 } from '../../components/Titles.component';
import { Paragraph } from '../../components/paragraphs.styles';
import { Colors } from '../../styles/variables';
import Contact from '../../components/sections/contact.component';
import Footer from '../../components/sections/Footer.component';
import { TextWeight } from '../../styles/text-variables/text-weight';
import Image1 from '../../assets/img/project.jpg';
import { List2 } from '../../components/Lists.styled';
import { LinkComponent } from '../../components/Links.styles';
import { HomePage } from '../home/home.styles';
import { useParams } from 'react-router-dom';

import data_portfolio from '../../data/data';

const ProjectDetailsPage = () => {
  const { pid } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <HomePage>
        {data_portfolio.projects
          .filter(({ id }) => id.toString() === pid)
          .map(
            ({
              projectName,
              longDescription,
              typeProject,
              stack,
              designDesicion,
              challenges,
              gitLink,
              appLink,
            }) => {
              return (
                <div
                  style={{ padding: '2rem', marginTop: '6rem' }}
                  id='project-title'
                >
                  <Title1 color={Colors.blueDark} weight={TextWeight.bold}>
                    {projectName}
                  </Title1>
                  <img
                    src={Image1}
                    alt='img'
                    width='100%'
                    style={{ marginTop: '2rem' }}
                  />
                  <Title3 weight={TextWeight.bold} mt='4rem'>
                    Description
                  </Title3>
                  <Paragraph>{longDescription}</Paragraph>
                  <LinkComponent href={gitLink}>Github</LinkComponent>
                  <LinkComponent href={appLink}>Live</LinkComponent>
                  <Title3 weight={TextWeight.bold} mt='4rem'>
                    Type of project
                  </Title3>
                  <Paragraph>{typeProject}</Paragraph>
                  <Title3 weight={TextWeight.bold} mt='4rem'>
                    Stack
                  </Title3>
                  <List2>
                    {stack.map((item) => (
                      <li key={item.id}>{item.skillName}</li>
                    ))}
                  </List2>
                  <Title3 weight={TextWeight.bold} mt='4rem'>
                    Design Desicions
                  </Title3>
                  <Paragraph>{designDesicion}</Paragraph>
                  <Title3 weight={TextWeight.bold} mt='4rem'>
                    Challenges and resolutions
                  </Title3>
                  <Paragraph>{challenges}</Paragraph>
                </div>
              );
            }
          )}

        <Contact />
      </HomePage>
      <Footer />
    </Fragment>
  );
};

export default ProjectDetailsPage;
