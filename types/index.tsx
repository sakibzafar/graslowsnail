// a interface specifies how a specific structure should look like, what variables and values should it have
interface Picture {
  _id: string;
  title: string;
  imageURL: string;
  description: string;
  album_id: string;
  printSize: string;
  price: number;
  isSold: boolean;
  albumThumbnail: boolean;
}

interface PictureListProps {
  albumId: string;
}

interface SimplePicturePageProps {
  params: {
    albumId: string;
    pictureId: string;
  };
}
