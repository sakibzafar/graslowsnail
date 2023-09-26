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
            <p className="text-gray-600">[A short description or biography about yourself, your background, your passion for photography, etc.]</p>
          </div>
          
          <div className="about-item">
            <h2 className="text-xl font-semibold">My Journey in Photography</h2>
            <p className="text-gray-600">[A brief story about how you got started in photography, any significant milestones, challenges you've faced, etc.]</p>
          </div>

          <div className="about-item">
            <h2 className="text-xl font-semibold">Why Purchase My Photos?</h2>
            <p className="text-gray-600">[Explain what makes your photos unique, the quality of prints, any awards or recognitions you've received, etc.]</p>
          </div>

          <div className="about-item">
            <h2 className="text-xl font-semibold">Future Plans & Aspirations</h2>
            <p className="text-gray-600">[Share your future goals related to photography, any upcoming projects or exhibitions, etc.]</p>
          </div>

          <div className="about-item">
            <h2 className="text-xl font-semibold">Get In Touch</h2>
            <p className="text-gray-600">Have questions or want to collaborate? Reach out to me at <a href="mailto:contact@yourwebapp.com" className="text-blue-500 underline">contact@yourwebapp.com</a>.</p>
          </div>
        </section>
    </div>
  );
};

