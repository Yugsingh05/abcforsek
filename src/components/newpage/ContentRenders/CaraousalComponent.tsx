'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { Media } from '@/payload-types';

type Slide = {
  image: {
    url: string;
    alt?: string;
  } & Media;
  title: string;
  description: string;
};

type Props = {
  heading: string;
  slides: Slide[];
  backgroundColor?: string
  caraousalColor?: string
};

const InsuranceCarouselBlock: React.FC<Props> = ({ heading, slides ,backgroundColor,caraousalColor}) => {

  console.log(backgroundColor,caraousalColor)
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  if(!currentSlide) return null

  return (
    <section className="py-16" style={{
      backgroundColor:backgroundColor || '#eff0f7'
    }}>
      <div className="max-w-5xl mx-auto px-8 py-10 rounded-2xl shadow-md text-center flex flex-col items-center gap-6" style={{
        backgroundColor:caraousalColor || '#ffffff'
      }}>

        <h2 className="text-xl md:text-2xl font-bold text-[#001353]">
          {heading}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full text-left">

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={currentSlide.image?.url}
              alt={currentSlide.image?.alt || 'Slide image'}
              width={400}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="font-semibold  text-[#001353] mb-2 text-lg md:text-xl">
              {currentSlide.title}
            </h3>
            <p className="text-md text-gray-700 leading-relaxed whitespace-pre-wrap ">
              {currentSlide.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#001353] text-white"
          >
            &#8592;
          </button>

          <div className="flex gap-1">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                  i === currentIndex ? 'bg-[#001353]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#001353] text-white"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCarouselBlock;
