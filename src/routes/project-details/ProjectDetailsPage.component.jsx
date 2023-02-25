import React, { Fragment, useEffect, useContext, useState } from 'react';
import {
  Title1,
  TitleProjects,
  Title3,
} from '../../components/Titles.component';
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

import {
  HeaderProjectImage,
  ProjectDetailsContainer,
} from './projectDetailsContainer.styles';
import { ProjectImage } from '../../components/Images.styles';
import { DataContext } from '../../context/DataContext';

const ProjectDetailsPage = () => {
  const { pid } = useParams();
  const { projects } = useContext(DataContext);
  const [index, setIndex] = useState(parseInt(pid));
  const [projectObject, setProjectObject] = useState({});

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(
        `https://www.andres-dev-portfolio.site/api/projects/${index}`
      );
      const data = await response.json();
      setProjectObject(data);
    };
    fetchProject();

    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <HomePage>
        <ProjectDetailsContainer id='project-title'>
          {window.innerWidth < 1200 ? (
            <Fragment>
              <Title1 color={Colors.blueDark} weight={TextWeight.bold}>
                {projectObject.name}
              </Title1>
              <ProjectImage src={Image1} alt='img' />
            </Fragment>
          ) : (
            <HeaderProjectImage imgUrl={Image1}>
              <TitleProjects color={Colors.blueLight} weight={TextWeight.bold}>
                {projectObject.name}
              </TitleProjects>
            </HeaderProjectImage>
          )}

          <Title3 weight={TextWeight.bold} mt='4rem'>
            Description
          </Title3>
          <Paragraph>{projectObject.longDesc}</Paragraph>
          <LinkComponent href={projectObject.repoLink}>Github</LinkComponent>
          <LinkComponent href={projectObject.appLink}>Live</LinkComponent>
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Type of project
          </Title3>
          <Paragraph>{projectObject.type}</Paragraph>
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Stack
          </Title3>
          {/* <List2>
            {stack.map((item) => (
              <li key={item.id}>{item.skillName}</li>
            ))}
          </List2> */}
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Design Desicions
          </Title3>
          <Paragraph>{projectObject.desicionDesc}</Paragraph>
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Challenges and resolutions
          </Title3>
          <Paragraph>{projectObject.challengeDesc}</Paragraph>
        </ProjectDetailsContainer>

        <Contact />
      </HomePage>
      <Footer />
    </Fragment>
  );
};

export default ProjectDetailsPage;
