'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SimplePicturePage = ({
  params: { albumId },
  params: { pictureId },
}: {
  params: {
    albumId: string;
    pictureId: string;
  };
}) => {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
  try {
    const response = await fetch(`https://qt2krlwyyg.execute-api.us-east-2.amazonaws.com/picture/${albumId}/${pictureId}`);
    const data = await response.json();
    console.log(data);
    setPicture(data.Item); // Update this line
    setLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false);
  }
};


    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!picture) {
    return <div>Picture not found.</div>;
  }

  return (
  <div className="flex flex-col items-center justify-center pt-20 px-6">
    <h1 className="text-4xl font-bold mb-6">{picture.title}</h1>
    <div className="relative w-1/2 h-1/2">
      <Image
        src={picture.imageURL}
        alt={`${picture.description}`}
        width={500}
        height={500}
        objectFit="cover"
        className="rounded-lg object-center"
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

