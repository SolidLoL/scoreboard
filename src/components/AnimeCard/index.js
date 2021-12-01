import React from 'react'
import './style.scss'

const INFO_DEFAULT = {
    titles:{
        en:'Cowboy Bebbop',
        it:'Cowboy Bebbop',
        jp:'Cowboy Bebbop'
    },
    season_year:'2015',
    cover_image:'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
};


export const AnimeCard = ({titles = INFO_DEFAULT.titles , cover_image = INFO_DEFAULT.cover_image , season_year= INFO_DEFAULT.season_year}) =>{
    return (
        <div className="Anime">
            <div className="name">{titles.en}</div>
            <img className="imagen" src={cover_image}></img>
            <div className="year">{season_year}</div>
        </div>
    )
}
