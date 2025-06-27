import React from 'react';
import Image from 'next/image';
import { Media } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';

type ContactOption = {
  icon: Media;
  title: string;
  description: any;
};

type Props = {
  heading: string;
  subheading: any;
  description: any;
  contactOptions: ContactOption[];
};

const ContactOptionsBlock: React.FC<Props> = ({
  heading,
  subheading,
  description,
  contactOptions,
}) => {
  return (
    <section className="bg-[#edeef6] py-16 px-4 text-[#040f4e]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-4 tracking-wide uppercase">
            {heading}
          </p>
          <div className="text-4xl md:text-5xl font-bold mb-6">
            <RichText data={subheading} />
          </div>
          <div className="text-lg max-w-2xl mx-auto">
            <RichText data={description} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-transparent rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4"
            >
     
              <div className="bg-[#9196f5] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Image
                  src={option.icon?.url ?? '/placeholder.png'}
                  alt={option.title}
                  width={30}
                  height={30}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 leading-tight">
                  {option.title}
                </h3>
                <div className="text-[15px] leading-relaxed">
                  <RichText data={option.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOptionsBlock;
