import { testPicture } from '@/constants';
import Image from 'next/image';

const picture = testPicture[0]; // Since testPicture is an array, get the first item

export function Picture() {

  return (
    <div className='hero'>
      <div className='flex-1 pt-20 padding-x'>
        <h1>{picture.title}</h1>
        <Image 
          src={picture.imageURL}
          alt={picture.description}
          width={500} 
          height={500}
          objectFit="cover"
          className="object-center"
        />
        <p>Description: {picture.description}</p>
        <p>Album: {picture.album_id}</p>
        <p>Print Size: {picture.printSize}</p>
        <p>Price: ${picture.price}</p>
        <p>Status: {picture.isSold ? 'Sold' : 'Available'}</p>
      </div>
    </div>
  );
}

export default Picture;

