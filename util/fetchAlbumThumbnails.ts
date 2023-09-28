// get fetchURL from .env
const lambdaURL = process.env.NEXT_PUBLIC_GET_ALBUMTHUMBNAIL_LAMBDA_URL

export async function fetchAlbumThumbNails() {
  try {
    // Fetch album thiumbnails form API
    const response = await fetch(lambdaURL!)

      // parse the response
      const result = await response.json();
      return JSON.parse(result.body).Items; // directly return items
  } catch (error) {
    console.error("ERROR fetching ablum thimbnails:", error);
    return []; // Return an emprty array if theres an error
  }
};
