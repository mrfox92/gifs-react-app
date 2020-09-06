//  retorna una promesa que resuelve la coleccion de imagenes o gifs
export const getGifs = async(category, limit = 12) => {

    //  realizamos la petición http para traer los gifs
    //  con encodeURI() de JS escapa los caracteres extraños y reemplaza los espacios por %20, entre otras cosas
    // const url = `https://api.giphy.com/v1/stickers/search?q=${ category }&limit=${ limit }&api_key=w4U0uVyxFyqlZrHTG3P8cJys72GSBsJs`;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=${ limit }&api_key=w4U0uVyxFyqlZrHTG3P8cJys72GSBsJs`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // console.log(data);

    const stickers = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(stickers);
    return stickers;
}