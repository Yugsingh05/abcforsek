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
    <section className="bg-[#edeef6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
   
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 mb-4 tracking-wide uppercase">
            {heading}
          </p>
          <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <RichText data={subheading} />
          </div>
          <div className="text-lg text-gray-600 max-w-2xl mx-auto">
            <RichText data={description} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-full mx-auto justify-between">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-transparent rounded-2xl p-6 flex items-center space-x-4 mx-auto lg:mx-0"
            >
            
              <div className="bg-blue-200 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Image
                  src={option.icon.url ?? '/placeholder.png'}
                  alt={option.title}
                  width={30}
                  height={30}
                  className="text-blue-700"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">
                  {option.title}
                </h3>
                <div className="text-gray-600 text-sm leading-relaxed">
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