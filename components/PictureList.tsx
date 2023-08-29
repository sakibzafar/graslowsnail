'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 500;

const PictureList = ({ albumId }) => {
  const [pictures, setPictures] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});

useEffect(() => {
  async function fetchPictures() {
    try {
  console.log(albumId);
      const response = await fetch(`https://qt2krlwyyg.execute-api.us-east-2.amazonaws.com/pictureList/${albumId}`);
      console.log("Raw Response:", response);
      const result = await response.json();
      console.log("Parsed Response:", result);

      setPictures(result.Items);  // Set the Items array to state
    } catch (error) {
      console.error("Error fetching pictures:", error);
    }
  }

  fetchPictures();
}, []);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
        <div className='hero'>
      <div className='flex-1 pt-20 padding-x'>
        <p>a list of pictures within a album</p>
        <ul role="list" className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {pictures?.map((picture) => (
            <li key={picture._id} className="relative">
              <Link href={`/pictures/${picture.album_id}/${picture._id}`} passHref>
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  {!loadedImages[picture._id] && 
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Loading spinner, can be replaced with any spinner component */}
                      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                  }
                  <Image 
                    src={picture.imageURL} 
                    alt={picture.description} 
                    width={IMAGE_WIDTH} 
                    height={IMAGE_HEIGHT}
                    onLoadingComplete={() => handleImageLoad(picture._id)}
                  />
                  <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">View details for {picture.album_id}</span>
                  </button>
                </div>
              </Link>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{picture.album_id}</p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">{picture.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>


  );
};

export default PictureList;

