import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Card from '../card/Card.component';

import './carrousel.styles.scss';

const Carrrousel = ({ projdata }) => {
  useEffect(() => register(), []);

  return (
    <swiper-container
      class='swiper-style'
      space-between='50'
      loop='true'
      pagination='true'
    >
      {projdata.map((project) => (
        <swiper-slide>
          <Card key={project.id} project={project} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default Carrrousel;
