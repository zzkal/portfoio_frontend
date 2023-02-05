import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Card from '../card/Card.component';

import './carrousel.styles.scss';

const Carrrousel = () => {
  useEffect(() => register(), []);

  return (
    <swiper-container
      class='swiper-style'
      space-between='50'
      loop='true'
      pagination='true'
    >
      <swiper-slide>
        <Card />
      </swiper-slide>
      <swiper-slide>
        <Card />
      </swiper-slide>
    </swiper-container>
  );
};

export default Carrrousel;
