'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SimplePicturePage: React.FC<SimplePicturePageProps> = ({
  params: { albumId, pictureId }
}) => {
  const [picture, setPicture] = useState<Picture | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://qt2krlwyyg.execute-api.us-east-2.amazonaws.com/picture/${albumId}/${pictureId}`);
        const data = await response.json();
        setPicture(data.Item);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* You can replace this with any loading spinner you like */}
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!picture) {
    return(
      <div className='hero' >Picture not found.</div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center pt-20 px-6">
      <h1 className="text-4xl font-bold mb-6">{picture.title}</h1>
      <div className="relative w-1/2 h-1/2">
        <Image
          src={picture.imageURL}
          alt={picture.description}
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg font-medium mb-2">Description: {picture.description}</p>
        <p className="text-lg font-medium mb-2">Album: {picture.album_id}</p>
        <p className="text-lg font-medium mb-2">Print Size: {picture.printSize}</p>
        <p className="text-lg font-medium mb-2">Price: ${picture.price}</p>
        <p className={`text-lg font-medium mb-2 ${picture.isSold ? 'text-red-500' : 'text-green-500'}`}>Status: {picture.isSold ? 'Sold' : 'Available'}</p>
      </div>
    </div>
  );
};

export default SimplePicturePage;

