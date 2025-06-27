import Image from 'next/image';
import { Media } from '@/payload-types';

type HeroLayout3Props = {
  heading: string;
  description: string;
  image: Media;
  textColor?: string;
};

export const HeroRender3: React.FC<HeroLayout3Props> = ({
  heading,
  description,
  image,
  textColor = '#ffffff',
}) => {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] sm:h-[80vh] sm:min-h-[500px] overflow-hidden rounded-2xl">
    
      {image?.url && (
        <Image
          src={image.url}
          alt={image.alt || 'Hero Image'}
          fill
          className="object-cover w-full h-full"
          priority
        />
      )}
      
      <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#0a1d59] p-6 md:p-7 max-w-md rounded-xl shadow-lg mx-auto sm:ml-20 z-10 " >
        <h2 className="text-3xl font-bold mb-4" style={{ color: textColor }}>
          {heading}
        </h2>
        <p className="text-base whitespace-pre-line" style={{ color: textColor }}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroRender3;
