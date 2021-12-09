import { useEffect, useState } from "react";
import axios from "axios";

const API =
  "https://api.aniapi.com/v1/anime?status=1&genres=War&nsfw=true&per_page=4";
const V = "1.0";
const GENRES = 0;
const LOCALIZATIONS = 1;
const SOUR = 2;
const SOURCES_API = "https://api.aniapi.com/v1/resources";
// const QUERY = 'anime?status=1&genres=War&nsfw=true&per_page=4';
const useInitialState = () => {
  const [anime, setAnime] = useState([]);
  //const [data , setdata] = useState();
  /*     const useCountGenres = async(name) =>{
        const API3 = `https://api.aniapi.com/v1/anime?status=1&genres=${name}`
        return await axios(API3);
    } */

  useEffect(async () => {
    const responseAPI = await axios(API);
    const query = `${SOURCES_API}/${V}/${SOUR}`;
    const genres = `${SOURCES_API}/${V}/${GENRES}`;
    const localization = `${SOURCES_API}/${V}/${LOCALIZATIONS}`;
    const response = {
      sources: {},
      animes: {},
      localization: {},
      genres: {},
    };
    //qUERY Data 
    const AsyncData = await axios(query);
    const AsyncGenres = await axios(genres);
    const AsyncLocalization = await axios(localization);
    //Asign data to response
    response.sources = AsyncData.data.data.sources;
    response.genres = AsyncGenres.data.data.genres;
    response.localization = AsyncLocalization.data.data.localizations;
    console.log(response);

    //setAnime(response.data);
    setAnime(responseAPI.data.data.documents);
  }, []);
  return anime;
};

export default useInitialState;
