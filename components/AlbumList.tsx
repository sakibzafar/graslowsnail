'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { fetchAlbumThumbNails } from '@/util' // Import Albumthumbnail fetch api

// Constants for image dimensions
const IMAGE_WIDTH = 966;
const IMAGE_HEIGHT = 641;

const AlbumList = () => {
  
  // State to hold pictures fetched from the API
  const [pictures, setPictures] = useState<Picture[]>([]);
  
  // State to hold image loading status
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  // Fetch pictures when component mounts
  useEffect(() => {
    async function loadAlbumThumbnails() {
      const thumbnails = await fetchAlbumThumbNails(); // using th eutility function for fetching album thumbnails
        setPictures(thumbnails);
    }
    loadAlbumThumbnails();
  }, []);

  // Function to update image loading status
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true  // Set this image as loaded
    }));
  };

  return (
    <div className=''>
      <div className='flex-1 pt-20 padding-x hero'>
        {/* Grid layout for pictures */}
        <ul role="list" className=" grid grid-row-3">
          {/* Map through pictures to display each one */}
          {pictures?.map((picture) => (
  <li key={picture._id} className="relative group my-7 mx-16">
    <Link href={`/pictures/${picture.album_id}`} passHref>
      <div className="relative hover:opacity-70 transform hover:scale-105 transition-all duration-300">
        
        {/* Spinner: It will show by default */}
        {!loadedImages[picture._id] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Actual Image */}
        <Image 
          src={picture.imageURL} 
          alt={picture.description} 
          width={966} 
          height={641}
          priority
          onLoadingComplete={() => handleImageLoad(picture._id)}
        />
          
        {/* Hover effect for the overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 ${loadedImages[picture._id] ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center text-white text-[40px] font-normal font-['Koulen']">{picture.album_id}</div>
        </div>

      </div>
    </Link>
  </li>
))}

        </ul>
      </div>
    </div>
  );
};

export default AlbumList;

