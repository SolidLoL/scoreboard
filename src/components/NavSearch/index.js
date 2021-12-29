import React, { useContext, useState, useEffect, Fragment } from 'react'
import Context from '@context/NavigationContext';
import {Spinner} from '@components/Spinner';
import axios from "axios";
import Fuse from 'fuse.js';
import { useNavigate } from "react-router-dom";
import './style.scss';

const IconSearch = () => {
    return (<svg className="icon-search" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z" />
    </svg>)
}


export const NavSearch = () => {
    // context and state of search navigation / keywordvalue
    const { search, setsearch } = useContext(Context)
    const [value, setvalue] = useState("")

    const [animeList, setanimeList] = useState([])
    const [loading, setloading] = useState(false);

    // Fuse.js To improb the search 
    const options = {
        includeScore: false,
        // Search in `author` and in `tags` array
        keys: ['titles.en']
      }

    
    // Named events on Search Objects
    let ClassName = (search) ? 'overlay' : '';
    let ClassChange = (value) ? 'visible' : 'invisible';
    let BorderChange = (value) ? 'rounded-top' : 'rounded';

    const eventSearch = (keyword) => {
        if(keyword){
            setloading(true);
            const API = `https://api.aniapi.com/v1/anime?title=${value}&nsfw=true&per_page=3`;
            axios.get(API)
            .then(res => {
                setloading(false);
                const fuse = (res.data.data.documents.length > 0)? new Fuse(res.data.data.documents, options) : [];
                const result = fuse.search(`^=${keyword}`)
                setanimeList(result);
            })
        }
    }
    

    // HandlerEvent on Search
    const handlerSearch = () => {
        setsearch(!search);
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        eventSearch(value);
    }
    const handleChange = (ev) => {
        setvalue(ev);
        setTimeout(()=>{
            eventSearch(value)  
        } ,1000);
    }
    const handlerBackspace = () => {
        setvalue('')
    }
    // HandlerEvent on Click Results
    let navigate = useNavigate();


    // Return Component
    return (
        <div className={`search-navigation ${ClassName}`}>
            <div className='icon-container' onClick={handlerSearch}>
                <IconSearch />
            </div>
            <div className={`overlay-search ${ClassName}`}>
                <div className='overlay-search-header'>
                    <div className={`w-100 d-flex group-input-search ${BorderChange}`}>
                        <span className="material-icons search" onClick={handleSubmit}>search</span>
                        <input className="input-search" type="text" value={value} onChange={e => handleChange(e.target.value)} />
                        <span className="material-icons delete" onClick={handlerBackspace}>backspace</span>
                    </div>
                    <span onClick={handlerSearch} className="material-icons close text-primary">close</span>
                </div>
                <div className={`overlay-search-body rounded-bottom ${ClassChange}`}>
                    {!loading ? animeList.map((anime)=>{
                        return (<div onClick={()=>{navigate(`anime/${anime.item.id}`);             setsearch(!search);
                        setvalue('')
                        setanimeList([]);}} key={anime.item.id} className='w-100 item-value'>{anime.item.titles.en}</div>);
                    }) : <div className='w-100 item-value'>{value}</div>}
                </div>
                    {loading? <Spinner/> : <></>}
            </div>
        </div>
    )
}
