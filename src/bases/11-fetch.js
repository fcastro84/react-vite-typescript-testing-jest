

// fetch in JS 

const getImage1 = async() => {
    try {
        const apiKey = 'kKKFxJP6X5b5ljK9vpfAPg67QKbUOxJo';
        const urlApi = 'https://api.giphy.com/v1/gifs/random?api_key=';
        const request = await fetch(`${urlApi}${apiKey}`);
        const { data } = await request.json()

        const { url } = data.images.original

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch ( error ) {
        console.log(error)
    }
    
}






request.then( resp => resp.json())
       .then( ( { data } ) => {
        // console.log(data.images.original.url)
       
    })
       .catch(console.error)