import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'https://api.aniapi.com/v1/anime?status=1&genres=War&nsfw=true&per_page=4';
// const QUERY = 'anime?status=1&genres=War&nsfw=true&per_page=4';
const useInitialState = () => {
    const [anime, setAnime] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setAnime(response.data.data.documents);
    }, [])
    return anime;
}

export default useInitialState