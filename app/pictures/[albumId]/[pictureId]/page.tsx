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

const SoldOutButton = () => {
  return (
    <div>
      <button className="w-96 h-9 bg-red-700 text-white font-semibold px-4  cursor-pointer transition-opacity duration-200 hover:opacity-80 shadow-md fot-semibold ">
        SOLD OUT
      </button>
    </div>
  );
};

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
  <div className="mt-6 text-center w-80">
  {/* Displaying additional picture information */}
  <p className="text-4xl  font-regular font-['Koulen']">{picture.title}</p>
  <p className="text-md font-light mb-2">Price: ${picture.price}</p>
  <p className="text-sm font-light mb-2">Each print will incluce a frame and be ready to be hung up </p>
  <p className="text-sm font-light mb-5">Every picture available for purchase on this website is an exclusive 1 of 1 print, once sold, it will never be reprinted.</p>
    <p className="text-sm font-light mb-4">Checkout securely with Stripe below.</p>
  </div> 

  {/* Using conditional styling for the status based on whether the picture is sold or not */}
  {picture.isSold ? <SoldOutButton /> : <CheckoutButton />}

  </div>

);
};

export default SimplePicturePage;

