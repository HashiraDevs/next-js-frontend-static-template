"use client";
import React, { useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(
        options,
        [
            AutoScroll({
                playOnInit: true,
                stopOnFocusIn: true,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                speed: 1.5,
            })
        ]
    );

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;
    }, [emblaApi]);

    return (
        <div>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
                    {slides.map((index) => (
                        <div
                            key={index}
                            className="flex-[0_0_45%] min-w-0 pl-4 transform translate-x-0 translate-y-0"
                        >
                            <div className="h-80 text-4xl font-semibold flex items-center justify-center rounded-3xl 
                shadow-[inset_0_0_0_0.2rem_rgba(0,0,0,0.2)] 
                dark:shadow-[inset_0_0_0_0.2rem_rgba(255,255,255,0.2)]
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100
                select-none transition-colors duration-200">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default EmblaCarousel;