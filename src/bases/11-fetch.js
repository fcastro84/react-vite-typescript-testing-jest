

// fetch in JS 
const apiKey = 'kKKFxJP6X5b5ljK9vpfAPg67QKbUOxJo';
const url = 'https://api.giphy.com/v1/gifs/random?api_key=';


const request = fetch(`${url}${apiKey}`);

request.then( resp => resp.json())
       .then( ( { data } ) => {
        // console.log(data.images.original.url)
        const img = document.createElement('img');
        img.src = data.images.original.url;
        document.body.append(img);
    })
       .catch(console.error)