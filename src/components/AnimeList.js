import React, {useState,useEffect} from 'react';
import {Anime} from './Anime';
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
  const RenderList = () => {
    { 
        animes.map(anime => <li key={anime.anilist_id}> <Anime  {...anime} /> </li>)
    }
  }
  
    return (
      <div className = "AnimeList">
        {animes.map(anime => <Anime key={anime.anilist_id} {...anime} />)}
      </div>
    )
  
}