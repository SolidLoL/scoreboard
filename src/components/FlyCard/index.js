import React , {useContext} from 'react'
import {AppContext} from '@context/AppContext';
import {Stars} from '@components/Stars'
import './style.scss';
import {Errorboundary} from '@routes/ErrorBoundary'

export const FlyCard = () => {
    const animes  = useContext(AppContext)
    const first = animes.animes[0];
    const info = (first.descriptions.en.length > 0)? first.descriptions.en : first.descriptions.it;
    const first3 = first.genres.slice(0, 3);

    console.log(<Stars score={first.score}/>)
    return(
        <div className='fly-card' style={{backgroundImage:`url(${first.cover_image})`}}>
         <div className='title'>{first.titles.en}</div>
         <div className='stars-fly'>
             <Stars score={first.score}/>
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

