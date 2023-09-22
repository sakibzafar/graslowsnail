'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { fetchPicturesForAlbum } from '@/util'

// Constants for image dimensions
const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 500;

// PictureList component definition with TypeScript props
const PictureList: React.FC<PictureListProps> = ({ albumId }) => {
  
  // State to hold pictures fetched from the API
  const [pictures, setPictures] = useState<Picture[]>([]);
  
  // State to hold image loading status
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  // Fetch pictures when component mounts
  useEffect(() => {
  async function loadPictures() {
    const pics = await fetchPicturesForAlbum(albumId);
    setPictures(pics);
  }
  loadPictures();
}, []);

  // Function to update image loading status
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true  // Set this image as loaded
    }));
  };

  return (
    <div className='hero'>
      <div className='flex-1 pt-20 padding-x hero'>
        {/* Grid layout for pictures */}
        <ul role="list" className="grid grid-cols-2 gap-4">
          {/* Map through pictures to display each one */} 
          {pictures?.map((picture) => (
            <li key={picture._id} className="relative">
              {/* Link to picture details */}
              <Link href={`/pictures/${picture.album_id}/${picture._id}`} passHref>
                {/* Image container */}

                  {/* Show loading spinner until image is loaded 
                  {!loadedImages[picture._id] && 
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                  }
                  */}
                  {/* Actual Image */}
                  <Image 
                    priority={true}
                    src={picture.imageURL} 
                    alt={picture.description} 
                    width={IMAGE_WIDTH} 
                    height={IMAGE_HEIGHT}
                    onLoadingComplete={() => handleImageLoad(picture._id)}
                  />

              </Link>

              {/* Picture metadata
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{picture.album_id}</p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">{picture.description}</p>
              */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PictureList;

