const LAMBDA_URL = process.env.NEXT_PUBLIC_GET_ALBUM_PICTURES_LAMBDA_URL;

export async function fetchPicturesForAlbum(albumId: string): Promise<Picture[]> {
  try {
    const response = await fetch(`${LAMBDA_URL}/pictureList/${albumId}`);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Error fetching pictures');
    }
    
    return result.Items;
  } catch (error) {
    console.error("Error fetching pictures:", error);
    return [];  // Returning empty array in case of failure
  }
}

