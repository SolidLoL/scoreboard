import React , {useContext} from 'react'
import {AppContext} from '@context/AppContext';
import './style.scss';

export const FlyCard = () => {
    const animes  = useContext(AppContext)
    const first = animes.animes[0];
    const info = (first.descriptions.en.length > 0)? first.descriptions.en : first.descriptions.it;
    const first3 = first.genres.slice(0, 3);
    console.log(first3)
    return(
        <div className='fly-card'>
         <img src={first.cover_image}></img>
         <div className='title'>{first.titles.en}</div>
         <div className='stars-fly'>
         {first.score}
         </div>
         <div className='info'>
            <div className='type'>
                {animes.catalog[first?.format]} | {first?.episodes_count} episodes
            </div>
            <div className='info'>
                {
                   info
                }
            </div>
            <div className='genres'>
                {
                    first3.map((element, i)=>{

                            switch (i) {
                                case 1:
                                    return element+"|";
                                    break;
                                case 2:
                                    return element;
                                    break;
                            
                                default:
                                    return element+"|";
                                    break;
                            }
                    })
                }
            </div>
         </div>
        </div>
    )
}

