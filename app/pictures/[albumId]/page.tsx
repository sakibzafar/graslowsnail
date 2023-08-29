import { PictureList } from '@/components';

export function PicturesInAlbum({
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

export default PicturesInAlbum;

