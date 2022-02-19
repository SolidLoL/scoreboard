import { useState, useEffect } from 'react'
import axios from "axios";

const useAnimeSearchList = (keyword) => {
    const [animeList, setanimeList] = useState({})
    const [loading, setloading] = useState(false);
    
    useEffect(async () => {
        setloading(true);
        console.log(keyword)
        const API = `https://api.aniapi.com/v1/anime?title=${keyword}&nsfw=true&per_page=3`;
        const response = { animeList: {} };
        response.animeList = await axios.get(API)
            .then(res => {
                console.log(res)
                return res;
                //res.data.data.documents?.length > 0 && setanimeList( res.data.data.documents );
            })
        setanimeList(response.animeList);


    }, [])


    return { animeList, loading };
}

export default useAnimeSearchList;
