'use client'
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import './embla.scss';

type CategoryType = {
  id: number;
  name: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
};

type PropType = {
  slides: CategoryType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <>
     <h2 className="" >Top Products of Month</h2>
      <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((category) => (
            <div className="embla__slide" key={category.id}>
              <img src={category?.images[0]} alt={category.name} className="embla__slide__img" />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default EmblaCarousel;
