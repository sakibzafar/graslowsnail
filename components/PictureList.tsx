'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { fetchPicturesForAlbum } from '@/util'

// Constants for image dimensions
const IMAGE_WIDTH = 700;
const IMAGE_HEIGHT = 700;

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

 // Define the breakpoint columns object to control the number of columns at different screen sizes.
  const breakpointColumnsObj = {
    default: 2, 
    1100: 2, // screen sizes this has 2 cols at pixle with 1000
    700: 2,
    550: 1
  };


  return (
    <div className='hero'>
      <div className='flex-1 pt-20 padding-x hero'>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {pictures?.map((picture) => (
            <div key={picture._id} className="relative">
              <Link href={`/pictures/${picture.album_id}/${picture._id}`} passHref>
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
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default PictureList;

