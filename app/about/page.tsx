import Image from 'next/image';
import pictureOfMe from '../../constants/pictureOfMe.jpeg';


export default function About() {
  return (
    <div className="container mx-auto px-4 mt-20">
    <h1 className="text-3xl mb-8 text-center">About Me</h1>

        <div className="relative mb-8 w-full max-w-md mx-auto">
          <Image 
              src={pictureOfMe} 
              alt="Descriptive Image Alt Text"
              width={900} 
              height={900} 
          />
        </div>

        <section className="about-section space-y-6">
          <div className="about-item">
            <h2 className="text-xl font-semibold">Who Am I?</h2>
            <p className="text-gray-600"></p>
          </div>
          
          <div className="about-item">
            <h2 className="text-xl font-semibold">My Journey in Photography</h2>
            <p className="text-gray-600">[A brief story about how you got started in photography, any significant milestones, challenges you've faced, etc.]</p>
          </div>

        </section>
    </div>
  );
};

