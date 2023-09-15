'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    async function fetchPictures() {
      try {
        // Fetch album thumbnails from API
        const response = await fetch("https://qt2krlwyyg.execute-api.us-east-2.amazonaws.com/albumThumbnails");
        
        // Parse the response
        const result = await response.json();
        const data = JSON.parse(result.body); // Parsing stringified JSON from "body" key
        
        // Set pictures in the state
        setPictures(data.Items);
      } catch (error) {
        console.error("Error fetching pictures:", error);
      }
    }

    fetchPictures();
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
            <li key={picture._id} className="relative group my-7 mx-16"> {/* Add group class */}
              <Link href={`/pictures/${picture.album_id}`} passHref>
                {/* Hover effects for the image */}
                <div className="relative hover:opacity-70 transform hover:scale-105 transition-all duration-300"> 
                  {/* Actual Image */}
                  <Image 
                    src={picture.imageURL} 
                    alt={picture.description} 
                    width={966} 
                    height={641}
                    onLoadingComplete={() => handleImageLoad(picture._id)}
                  />
                    {/* Hover effect for the overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                  {/* Album ID Overlayed on the Image */}
                    <div className="text-center text-white text-[40px] font-normal font-['Koulen'] ">{picture.album_id}</div>
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

