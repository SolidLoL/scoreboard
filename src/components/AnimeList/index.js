import React, {/* useState,useEffect, */ useContext, Fragment} from 'react';
import {AppContext} from '@context/AppContext';
import {AnimeCard} from '../AnimeCard';
import {SearchAnime} from '../SearchAnime';
// import axios from 'axios';
import './style.scss';

export const AnimeList = ()=> {
  const animes  = useContext(AppContext)
    return (
      <Fragment>
        <SearchAnime></SearchAnime>
      <div className = "AnimeList">
        {(typeof animes.animes == undefined)? "error" : animes.animes.map(anime => <AnimeCard key={anime.anilist_id} anime = {anime} {...anime} />)}
      </div>
      </Fragment>
    )
  
}