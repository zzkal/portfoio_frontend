import React, { Fragment, useEffect, useState } from 'react';
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
import { LinkComponent } from '../../components/Links.styles';
import { HomePage } from '../home/home.styles';
import { useParams } from 'react-router-dom';

import {
  HeaderProjectImage,
  ProjectDetailsContainer,
} from './projectDetailsContainer.styles';
import { ProjectImage } from '../../components/Images.styles';
import { DataContext } from '../../context/DataContext';
import { List2 } from '../../components/Lists.styled';

const ProjectDetailsPage = () => {
  const { pid } = useParams();
  //const { projects } = useContext(DataContext);
  const [index, setIndex] = useState(parseInt(pid));
  const [isLoading, setIsLoading] = useState(false);
  const [projectObject, setProjectObject] = useState({});
  const [stackArray, setStackArray] = useState([]);

  useEffect(() => {
    let arr = [];

    const fetchProject = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.andres-dev-portfolio.site/api/projects/${index}`
        );
        const data = await response.json();

        data.stack.map(async (route) => {
          const res = await fetch('https://andres-dev-portfolio.site' + route);
          const data = await res.json();
          arr.push(data.name);
          setStackArray(arr);
        });

        setProjectObject(data);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchProject();

    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <HomePage>
        {isLoading ? (
          <></>
        ) : (
          <ProjectDetailsContainer id='project-title'>
            {window.innerWidth < 1200 ? (
              <Fragment>
                <Title1 color={Colors.blueDark} weight={TextWeight.bold}>
                  {projectObject.name}
                </Title1>
                <ProjectImage
                  src={`https://www.andres-dev-portfolio.site${projectObject.imgUrl}`}
                  alt='img'
                />
              </Fragment>
            ) : (
              <HeaderProjectImage
                imgUrl={`https://www.andres-dev-portfolio.site${projectObject.imgUrl}`}
              >
                <TitleProjects
                  color={Colors.blueLight}
                  weight={TextWeight.bold}
                >
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
            <List2>
              {stackArray.map((item) => (
                <li key={stackArray.indexOf(item)}>{item}</li>
              ))}
            </List2>
            <Title3 weight={TextWeight.bold} mt='4rem'>
              Design Desicions
            </Title3>
            <Paragraph>{projectObject.desicionDesc}</Paragraph>
            <Title3 weight={TextWeight.bold} mt='4rem'>
              Challenges and resolutions
            </Title3>
            <Paragraph>{projectObject.challengeDesc}</Paragraph>
          </ProjectDetailsContainer>
        )}

        <Contact />
      </HomePage>
      <Footer />
    </Fragment>
  );
};

export default ProjectDetailsPage;
