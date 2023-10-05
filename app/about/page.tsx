import Image from 'next/image';
import pictureOfMe from '../../constants/pictureOfMe.jpeg';
import Link from 'next/link';


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

         <p className="text-md font-light mb-2"> Born and raised in Houston, I've discoverd the art of analog photography over the last two years.   </p>
           <p className="text-md font-light mb-2">This journey has allowed me to capture moments from my life, which I'm excited to share with you! </p>
           <p className="text-md font-light mb-4"> I created this website not only as a platform to showcase my work but also to offer these captured memories for purchase, allowing them to be displayed and appreciated by a wider audience.</p>
           <p className="text-md font-light mb-2"> Have any questions? Dont be afraid to reach out!</p>
                    <Link href='/contact'>
                <h1 className="text-2xl navbar-h1 font-normal font-['Koulen']">CONTACT</h1>
            </Link>

      </div> 

  </div>
  );
};

