import React from 'react'

import './style.scss'

const INFO_DEFAULT = {
    titles:{
        en:'Cowboy Bebbop',
        it:'Cowboy Bebbop',
        jp:'Cowboy Bebbop'
    },
    score:'80',
    episodes_count:'70',
    cover_image:'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
};


export const AnimeCard = ({titles = INFO_DEFAULT.titles , cover_image = INFO_DEFAULT.cover_image , score= INFO_DEFAULT.score , anime}) =>{

    const scoretostars = (score) => {
        return !(typeof score === 'number' && score <= 0)?  Math.round((5/100)*score) : 0;
    }
    
    const handleHover = (ev) => {
        // ev.preventDefault();
        //console.log(ev)
    }

    return (
        <div className="AnimeCard" onMouseEnter={e =>handleHover(e)}>
            <div className="image">
                <img src={cover_image}></img>
            </div>
            <div className="info-bottom">
            <div className="name">{titles.en}</div>
            <div className="stats-card">
                <div className="score_stars">{scoretostars(score)}</div>
                <div className="episodes">{ `${anime.episodes_count} episodes`} </div>
            </div>
            </div>
        </div>
    )
}
