import React from 'react'
import { Link } from "react-router-dom";
import { Stars } from '@components/Stars';
import './style.scss'

export const AnimeCard = ({anime}) =>{

    return (
        <Link className="AnimeCard" to={`/anime/${anime.id}`}  >
            <div className="image">
                <img src={anime.cover_image}></img>
            </div>
            <div className="info-bottom">
            <div className="name">{anime.titles.en}</div>
            <div className="stats-card">
                <div className="score_stars"><Stars score={anime.score}/></div>
                <div className="episodes">{ `${anime.episodes_count} episodes`} </div>
            </div>
            </div>
        </Link>
    )
}
