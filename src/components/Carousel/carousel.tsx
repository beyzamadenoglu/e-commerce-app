'use client'
import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './emblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import imageByIndex from './imageByIndex';

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const { autoplay } = emblaApi.plugins();
        if (!autoplay) return;

        const anyAutoplay = autoplay as any;
        if (anyAutoplay.options?.stopOnInteraction !== false) {
            anyAutoplay.stop();
        }
    }, []);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onButtonClick);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <img
                                className="embla__slide__img"
                                src={imageByIndex(index)}
                                alt={`Your alt text ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
        </div>
    );
};

export default EmblaCarousel;
