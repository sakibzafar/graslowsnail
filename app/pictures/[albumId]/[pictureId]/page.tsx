'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckoutButton } from '@/components';

import { fetchPictureData } from '@/util';

// Define the main component, accepting albumId and pictureId as props.
const SimplePicturePage: React.FC<SimplePicturePageProps> = ({
  params: { albumId, pictureId }
}) => {
  // State for holding the picture information. Initialized as null.
  const [picture, setPicture] = useState<Picture | null>(null);

  // State for tracking the loading status. Initialized as true.
  const [loading, setLoading] = useState<boolean>(true);

  // Use the useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    async function loadPictureData() {
      try {
        const picData = await fetchPictureData(albumId, pictureId);
        setPicture(picData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching picture data:', error);
        setLoading(false);
      }
    }
      loadPictureData();
  }, []);

  // Show loading spinner if the data is still loading.
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* You can replace this with any loading spinner you like */}
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Show this message if the picture is not found.
  if (!picture) {
    return(
      <div className='hero' >Picture not found.</div>
    );
  }

  // Main return function to display picture information.
  return (
    <div className="flex flex-col items-center justify-center pt-20 px-6">
    <div className="">
      {/* Use Next.js Image component for optimized image loading */}
      <Image
        src={picture.imageURL}
        alt={picture.description}
        width={988} // Adjust this value according to your needs
        height={800} // Adjust this value according to your needs
        priority={true} // Loads the image with high priority
      />
    </div>
    <div className="mt-6 text-center">
        {/* Displaying additional picture information */}
        <p className="text-lg font-bold ">{picture.title}</p>
        <p className="text-md font-light mb-2">Price: ${picture.price}</p>
        <p className="text-sm font-light mb-2">Printed on  Hahnemühle  Photo Rag Baryta.  315 gsm.  1 00% Cotton  White.  High Gloss</p>
        <p className="text-sm font-light mb-2">Exclusive Limited Edition individual print from my "{picture.album_id}" collection.</p>
        <p className="text-sm font-light mb-5">Every picture available for purchase on this website is an exclusive 1 of 1 print, once sold, it will never be reprinted.</p>
        <p className="text-sm font-light">Checkout securely with Stripe below.</p>
     </div> 
     <CheckoutButton />
       {/* Using conditional styling for the status based on whether the picture is sold or not */}
       <p className={`text-lg font-medium mb-2 ${picture.isSold ? 'text-red' : 'text-green'}-${500}`}>Status: {picture.isSold ? 'Sold' : 'Available'}</p> 
</div>

  );
};

export default SimplePicturePage;

