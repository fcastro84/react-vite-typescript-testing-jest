// Async-Await in JS

export const getImage = async () => {
  try {
    const apiKey = "kKKFxJP6X5b5ljK9vpfAPg67QKbUOxJo";
    const urlApi = "https://api.giphy.com/v1/gifs/random?api_key=";

    const request = await fetch(`${urlApi}${apiKey}`);
    const { data } = await request.json();
    const { url } = data.images.original;

    return url
  } catch (error) {
    return 'Not exits the image'
  }
};

