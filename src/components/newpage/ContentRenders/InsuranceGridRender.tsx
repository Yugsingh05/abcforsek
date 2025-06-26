'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Media } from '@/payload-types';

type InsuranceItem = {
  icon: {
    url: string;
    alt?: string;
  } & Media;
  label: string;
};

type Props = {
  heading: string;
  subheading?: string;
  items: InsuranceItem[];
  buttonText: string;
  buttonLink?: string;
};

const InsuranceTypeGridRender: React.FC<Props> = ({
  heading,
  subheading,
  items,
  buttonText,
  buttonLink = '#',
}) => {
  return (
    <section className="bg-[#eff1f7] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold text-[#001353] mb-4">
          {heading}
        </h2>

      
        {subheading && (
          <p className="text-base md:text-lg text-[#001353] max-w-2xl mx-auto mb-10">
            {subheading}
          </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
            >
              <Image
                src={item.icon.url}
                alt={item.icon.alt || item.label}
                width={75}
                height={75}
                className="mb-2 object-contain"
              />
              <p className="text-base font-medium text-black">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        {buttonText && (
          <Link
            href={buttonLink}
            className="inline-block px-10 py-3 rounded-full text-white font-semibold text-lg bg-[#9196f5] hover:bg-[#7f86e5] transition"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default InsuranceTypeGridRender;
