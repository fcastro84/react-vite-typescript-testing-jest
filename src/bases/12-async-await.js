// Async-Await in JS

const getImage = async () => {
  try {
    const apiKey = "kKKFxJP6X5b5ljK9vpfAPg67QKbUOxJo";
    const url = "https://api.giphy.com/v1/gifs/random?api_key=";

    const request = await fetch(`${url}${apiKey}`);
    const { data } = await request.json();

    const img = document.createElement("img");
    img.src = data.images.original.url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
