'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckoutButton } from '@/components';

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
    // Asynchronous function to fetch picture data.
    const fetchData = async () => {
      try {
        // Fetching the data.
        const response = await fetch(`https://qt2krlwyyg.execute-api.us-east-2.amazonaws.com/picture/${albumId}/${pictureId}`);
        const data = await response.json();

        // Setting the fetched picture data to state.
        setPicture(data.Item);
        setLoading(false);  // Set loading to false after data is fetched.
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);  // Set loading to false if an error occurs.
      }
    };

    // Call the fetchData function.
    fetchData();
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
      <h1 className="text-4xl font-bold mb-6">{picture.title}</h1>
      <div className="relative w-1/2 h-1/2">
        {/* Use Next.js Image component for optimized image loading */}
        <Image
          src={picture.imageURL}
          alt={picture.description}
          width={500}
          height={500}
          priority={true} // Loads the image with high priority
        />
      </div>
      <div className="mt-6 text-center">
        {/* Displaying additional picture information */}
        <p className="text-lg font-medium mb-2">Description: {picture.description}</p>
        <p className="text-lg font-medium mb-2">Part of the {picture.album_id} album</p>
        <p className="text-lg font-medium mb-2">Print Size: {picture.printSize}</p>
        <p className="text-lg font-medium mb-2">Price: ${picture.price}</p>
        {/* Using conditional styling for the status based on whether the picture is sold or not */}
        <p className={`text-lg font-medium mb-2 ${picture.isSold ? 'text-red-500' : 'text-green-500'}`}>Status: {picture.isSold ? 'Sold' : 'Available'}</p>
      </div>
      <p className="mb-4">Would you like to own this picture? Checkout below!</p>
        < CheckoutButton />
    </div>
  );
};

export default SimplePicturePage;

