import React, {/* useState,useEffect, */ useContext, Fragment} from 'react';
import {AppContext} from '@context/AppContext';
import {AnimeCard} from '../AnimeCard';
import {SearchAnime} from '../SearchAnime';
// import axios from 'axios';
import './style.scss';

export const AnimeList = ()=> {
  const animes  = useContext(AppContext)
  /*const [animes, setanimes] = useState([])

   useEffect(function () {
      axios.get(`https://api.aniapi.com/v1/anime?status=1&genres=War&nsfw=true&per_page=4`)
        .then(res => {
          setanimes( res.data.data.documents );
        })

  },[]) */
    return (
      <Fragment>
        <SearchAnime></SearchAnime>
      <div className = "AnimeList">
        {(typeof animes == undefined)? "error" : animes?.map(anime => <AnimeCard key={anime.anilist_id} anime = {anime} {...anime} />)}
      </div>
      </Fragment>
    )
  
}