import React, {useState,useEffect, Fragment} from 'react';
import {Anime} from './Anime';
import {Search} from './Search.js';
import axios from 'axios';
import './AnimeList.scss';

export const AnimeList = ()=> {
  const [animes, setanimes] = useState([])

  useEffect(function () {
      axios.get(`https://api.aniapi.com/v1/anime?status=1&genres=War&nsfw=true`)
        .then(res => {
          setanimes( res.data.data.documents );
        })

  },[])
  console.log(animes)
  
    return (
      <Fragment>
        <Search></Search>
      <div className = "AnimeList">
        {animes.map(anime => <Anime key={anime.anilist_id} {...anime} />)}
      </div>
      </Fragment>
    )
  
}