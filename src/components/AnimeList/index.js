import React, {useState,useEffect, Fragment} from 'react';
import {AnimeCard} from '../AnimeCard';
import {SearchAnime} from '../SearchAnime';
import axios from 'axios';
import './style.scss';

export const AnimeList = ()=> {
  const [animes, setanimes] = useState([])

  useEffect(function () {
      axios.get(`https://api.aniapi.com/v1/anime?status=1&genres=War&nsfw=true`)
        .then(res => {
          setanimes( res.data.data.documents );
        })

  },[])
  
    return (
      <Fragment>
        <SearchAnime></SearchAnime>
      <div className = "AnimeList">
        {animes.map(anime => <AnimeCard key={anime.anilist_id} {...anime} />)}
      </div>
      </Fragment>
    )
  
}