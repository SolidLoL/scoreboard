import React ,{useState,Fragment} from 'react'
import {OverlayMenu} from '@components/OverlayMenu';

const HamburgIcon = ()=>{ return (<svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z" fill="#04B27E"/>
</svg>)} 

export const Hamburg = () => {
    const [open, setopen] = useState(false);

    const onOpen= ()=>{
        setopen(!open);
    }

     return (
         <Fragment>
            {
                (open !== true)? (
                    <div className='menu' onClick ={onOpen}> <HamburgIcon/></div>
                ): (<OverlayMenu onOpen={onOpen} />)
            }
         </Fragment>
     )
 }
 
