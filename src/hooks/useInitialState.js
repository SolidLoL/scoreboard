import { useEffect, useState } from "react";
import axios from "axios";

const API =
  "https://api.aniapi.com/v1/anime?status=1&nsfw=true&per_page=4";
const V = "1.0";
const GENRES = 0;
const LOCALIZATIONS = 1;
const SOUR = 2;
const SOURCES_API = "https://api.aniapi.com/v1/resources";

const useInitialState = () => {
  const [anime, setAnime] = useState([]);

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
      catalog:{
        0:"TV" ,
        1:"TV_SHORT",
        2:"MOVIE",
        3:"SPECIAL",
        4:"OVA",
        5:"ONA",
        6:"MUSIC"
      }
    };
    //qUERY Data 
    const AsyncData = await axios(query);
    const AsyncGenres = await axios(genres);
    const AsyncLocalization = await axios(localization);
    //Asign data to response
    response.sources = AsyncData.data.data.sources;
    response.genres = AsyncGenres.data.data.genres;
    response.localization = AsyncLocalization.data.data.localizations;
    response.animes = responseAPI.data.data.documents;

    //setAnime(response.data);
    setAnime(response);
  }, []);
  return anime;
};

export default useInitialState;
