import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export const Search = () => {
    const [value, setvalue] = useState("");
    const [animes, setanimes] = useState([]);

    const SearchLike = (name)=>{
        console.log(name)
        axios.get(`https://api.aniapi.com/v1/anime?title=${name}&nsfw=true&per_page=3`)
        .then(res => {
            console.log(res)
            setanimes( res.data.data.documents );
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(`the name ${value}`);
    }
    const handleChange = (ev) => {
        setvalue(ev);
        setTimeout(()=>{
            SearchLike(value)  
        } ,100);
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={value} onChange={e => handleChange(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div className="maybe-list">
                <ul>
                    {
                        animes.map(anime => <li key={anime.anilist_id}  > {anime.titles.en}</li> )
                    }
                    
                </ul>
            </div>

        </Fragment>
    )
}
