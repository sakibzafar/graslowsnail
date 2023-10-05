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

const [wantFrame, setWantFrame] = useState(false);

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
    <Image
      src={picture.imageURL}
      alt={picture.description}
      width={988}
      height={800}
      priority={true}
    />
  </div>
  <div className="mt-6 text-center w-80">
    <p className="text-4xl font-regular font-['Koulen']">{picture.title}</p>

    {/* Only show the price and frame option if the picture is not sold */}
    {!picture.isSold && (
      <>
        <p className="text-lg font-light mb-2">${wantFrame ? '54.99' : '24.99'}</p>
        <div className="text-sm flex items-center mb-2">
          <label className="flex items-center cursor-pointer text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 rounded"
              checked={wantFrame}
              onChange={() => setWantFrame(!wantFrame)}
            />
            <span className="ml-2">Do you want to add a frame? +$35</span>
          </label>
        </div>
      </>
    )}

    <p className="text-sm font-light mb-2">Exclusive Limited Edition individual print from the "{picture.album_id}" Collection.</p>
    <p className="text-sm font-light mb-6">Every photo available for purchase on this site is a one-of-one print. It comes framed and ready to be displayed. Once sold, this particular print will never be reprinted.</p>

  </div>

  {picture.isSold ? <SoldOutButton /> : <CheckoutButton wantFrame={wantFrame} />}
</div>
);

};

export default SimplePicturePage;

