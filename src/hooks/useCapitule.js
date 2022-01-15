import { useEffect, useState } from "react";
import axios from "axios";


const useCapitule = (id, episode) => {
  const [anime, setAnime] = useState([]);


  useEffect(async () => {
    const API = `https://api.aniapi.com/v1/episode?anime_id=${id}&number=${episode}`;

    const responseAPI = await axios(API);
    //Asign data to response
    const { documents } = responseAPI.data?.data;

    //setAnime(response.data);
    setAnime(documents);
  }, []);
  return anime;

}

export default useCapitule;