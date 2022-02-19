import { useEffect, useState} from "react";
import axios from "axios";


const useAnimeInfo = (id) => {
    const [anime, setAnime] = useState([]);
     const API =`https://api.aniapi.com/v1/anime/${id}`;

    useEffect(async () => {
        const responseAPI = await axios(API);
        //Asign data to response
        const {data} = responseAPI.data;
    
        //setAnime(response.data);
        setAnime(data);
      }, []);
      return anime;
    
}

export default  useAnimeInfo ;