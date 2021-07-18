export const getImagen = async(apiKey) => {
    try {
        // const apiKey = 'd3euxrgy4Um59XUngA1tD8mVoROeHke7';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        return url
    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No existe'
    }
}



