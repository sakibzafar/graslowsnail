import { PictureList } from '@/components';

export default function PicturesInAlbum({
  params: { albumId },
}: {
  params: {
    albumId: any;
  };
}){

  return (
    <div className='overflow-hidden'>
        < PictureList albumId={albumId} />
    </div>
  );
}

