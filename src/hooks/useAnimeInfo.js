import { useEffect, useState, useCallback} from "react";
import axios from "axios";


const useAnimeInfo = ({id}) => {
    const [anime, setAnime] = useState([]);
    const API =`https://api.aniapi.com/v1/anime/${id}`;
    useEffect(async () => {
        const response = {anime: {}};
        const responseAPI = await axios(API);

        //Asign data to response
        response.anime= responseAPI.data;
    
        //setAnime(response.data);
        setAnime(response);
      }, []);
      return anime;
    
}

export default  useAnimeInfo ;