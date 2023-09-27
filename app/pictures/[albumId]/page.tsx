import { PictureList } from '@/components';

export default function PicturesInAlbum({
  params: { albumId },
}: {
  params: {
    albumId: string;
  };
}){

  return (
    <div className='overflow-hidden'>
        < PictureList albumId={albumId} />
    </div>
  );
}

