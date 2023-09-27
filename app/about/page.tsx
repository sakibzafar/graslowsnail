import Image from 'next/image';
import pictureOfMe from '../../constants/pictureOfMe.jpeg';


export default function About() {
  return (

      <div className="flex flex-col items-center justify-center pt-20 px-6">
  <div className="">
  {/* Use Next.js Image component for optimized image loading */}
    <Image
              src={pictureOfMe} 
  alt="Descriptive Image Alt Text"
  width={700} // Adjust this value according to your needs
  height={700} // Adjust this value according to your needs
  priority={true} // Loads the image with high priority
  />
  </div>
  <div className="mt-6 text-center w-96">
  {/* Displaying additional picture information */}
  <p className="text-4xl  font-regular font-['Koulen']">ABOUT ME</p>

  <p className="text-md font-light mb-2"> </p>
  <p className="text-md font-light mb-2"> </p>

  </div> 
  </div>


  );
};

