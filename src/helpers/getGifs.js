export const getGifs = async(category) => {
    const apiKey = 'Cc85aFkt7OIA5hVi9hbM7XcnCht1fUGQ'
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=50&&api_key=${ apiKey }`;
    const resp = await fetch(url)
    const {data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}
