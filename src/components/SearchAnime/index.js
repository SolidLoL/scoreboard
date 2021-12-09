import React, { useState, Fragment } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from 'axios';

/* export const SearchAnime = () => {
    const [value, setvalue] = useState("");
    const [animes, setanimes] = useState([]);

    const SearchLike = (name)=>{
        console.log(name)
        axios.get(`https://api.aniapi.com/v1/anime?title=${name}&nsfw=true&per_page=3`)
        .then(res => {
            res.data.data.documents?.length > 0 && setanimes( res.data.data.documents );
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
        } ,1000);
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
} */

export const SearchAnime = () => {
    const [items, setitems] = useState([
        {
            id: 0,
            name: 'Default Name Anime 1' 
        },
        {
            id: 1,
            name: 'Default Name Anime 2' 
        },
        {
            id: 2,
            name: 'Default Name Anime 3' 
        },
        {
            id: 3,
            name: 'Default Name Anime 4' 
        },
        {
            id: 4,
            name: 'Default Name Anime 5' 
        }
    ]);
    const SearchLike = (name) => {
        axios.get(`https://api.aniapi.com/v1/anime?title=${name}&nsfw=true&per_page=3`)
            .then(res => {
                console.log(res.data.data.documents)
                let newData = res.data.data.documents?.length > 0 && Object.keys(res.data.data.documents).map(function(key) {
                    return { id: res.data.data.documents[key]['anilist_id'], name: res.data.data.documents[key]['titles']['en']};
                  }) 

                setitems(newData)
            })
    }

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        SearchLike(string);
        console.log(results)
        // console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return item
        // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
    }

    return (
        <div className="Search">
            <header className="Search-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        fuseOptions={{ keys: ["id", "name"] }}
                        resultStringKeyName="name"
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
            </header>
        </div>
    )
}
