import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import CustomButton from '@/components/CustomComponent/CustomButton';

type PriceCard = {
  title: any;
  subtitle: any;
  buttonTitle: string;
  buttonLink: string;
  buttonColor?: string;
  backgroundColor?: string
};

type Props = {
  prices: PriceCard[];
  backgroundColor?: string
};

const MultiplePriceDescription: React.FC<Props> = ({ prices,backgroundColor }) => {
  return (
    <section className=" py-20 sm:py-32 my-5" style={{
      backgroundColor: backgroundColor || '#fff'
    }}>
      <div className="max-w-7xl mx-auto sm:px-6 items-center lg:px-8 flex flex-col md:flex-row justify-center gap-4">
        {prices.map((card, index) => (
          <div
            key={index}
            className="text-center max-w-sm w-full flex flex-col items-center sm:px-4 "
          >
            <h3 className="font-semibold text-[#1a1a3c] text-lg">{card.title}</h3>
              <p className="text-sm text-[#3e3e5f] mt-2">{card.subtitle}</p>
          
            <CustomButton
              buttonText={card.buttonTitle}
              buttonLink={card.buttonLink}
              backgroundColor={card.buttonColor || '#4b55c1'}

            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MultiplePriceDescription;
