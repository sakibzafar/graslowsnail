const LAMBDA_URL = process.env.NEXT_PUBLIC_GET_SINGLE_PICTURE_LAMBDA_URL

export async function fetchPictureData(albumId: string, pictureId: string): Promise<Picture> {
  try {
    const response = await fetch(`${LAMBDA_URL}/picture/${albumId}/${pictureId}`);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Error fetching picture data');
    }
    
    return result.Item;
  } catch (error) {
    console.error("Error fetching picture data:", error);
    throw error;  // Re-throw the error so that we can handle it in the component
  }
}

