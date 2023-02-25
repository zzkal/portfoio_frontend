import { Fragment, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Card from '../card/Card.component';

import './carrousel.styles.scss';

const Carrrousel = ({ projects }) => {
  useEffect(() => register(), []);

  const displayCarousel = () => {
    if (window.innerWidth < 700) {
      return (
        <swiper-container
          class='swiper-style'
          loop='true'
          pagination='true'
          space-between='50'
        >
          {projects.map((project) => (
            <swiper-slide>
              <Card key={project.id} project={project} />
            </swiper-slide>
          ))}
        </swiper-container>
      );
    } else if (window.innerWidth > 700 && window.innerWidth < 1200) {
      return (
        <swiper-container
          class='swiper-style'
          loop='true'
          slides-per-view='2'
          pagination='true'
          space-between='50'
        >
          {projects.map((project) => (
            <swiper-slide>
              <Card key={project.id} project={project} />
            </swiper-slide>
          ))}
        </swiper-container>
      );
    } else if (window.innerWidth > 1200) {
      return (
        <swiper-container
          class='swiper-style'
          slides-per-view='3'
          loop='true'
          pagination='true'
        >
          {projects.map((project) => (
            <swiper-slide>
              <Card key={project.id} project={project} />
            </swiper-slide>
          ))}
        </swiper-container>
      );
    }
  };

  return <Fragment>{displayCarousel()}</Fragment>;
};

export default Carrrousel;
