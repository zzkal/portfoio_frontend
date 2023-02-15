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

const ProjectDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <HomePage>
        <div style={{ padding: '2rem', marginTop: '6rem' }} id='project-title'>
          <Title1 color={Colors.blueDark} weight={TextWeight.bold}>
            Project Name
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
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus tenetur dolorem ullam rerum dolore nisi, necessitatibus
            provident accusantium in sit ducimus inventore enim dignissimos
            ratione non exercitationem ab doloribus eveniet.
          </Paragraph>
          <LinkComponent href='#'>Github</LinkComponent>
          <LinkComponent href='#'>Live</LinkComponent>
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Type of project
          </Title3>
          <Paragraph>Personal project</Paragraph>
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Stack
          </Title3>
          <List2>
            <li>tect 1</li>
            <li>tect 2</li>
            <li>tect 3</li>
            <li>tect 4</li>
            <li>tect 5</li>
          </List2>
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Design Desicions
          </Title3>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            laborum necessitatibus aliquid cupiditate illo dignissimos iusto,
            minus praesentium eveniet quod, nemo tempora earum provident
            explicabo tempore blanditiis. Vel, veritatis voluptatem.
          </Paragraph>
          <Title3 weight={TextWeight.bold} mt='4rem'>
            Challenges and resolutions
          </Title3>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            laborum necessitatibus aliquid cupiditate illo dignissimos iusto,
            minus praesentium eveniet quod, nemo tempora earum provident
            explicabo tempore blanditiis. Vel, veritatis voluptatem.
          </Paragraph>
        </div>

        <Contact />
      </HomePage>
      <Footer />
    </Fragment>
  );
};

export default ProjectDetailsPage;
