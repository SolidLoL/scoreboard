import React, { useState, Fragment } from 'react'
import { OverlayMenu } from '@components/OverlayMenu';


const HamburgIcon = ({event}) => {
    const fillColor = "#56AD93";
    const ClassEvent = event ? '0' : '0';
    //const StyledEvent = event ? ["rotate(-45)", "rotate(45)"] : ["",""];
    //console.log(StyledEvent)
    return (
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className='top-menu' width="100%" height="2.70769" fill={fillColor} />
            <rect className='middle-menu' height="2.70769" fill={fillColor} width="100%" x={ClassEvent} y="10" rx="1.35385" />
            <rect className='bottom-menu' x="0" y="20" width="100%" height="2.70769" rx="1.35385" fill={fillColor} />
        </svg>
    )
}

export const Hamburg = () => {
    const [open, setopen] = useState(false);

    let classMenu = (!open) ? 'menu menu-close' : 'menu menu-open';

    const onOpen = () => {
        setopen(!open);
    }

    return (
        <Fragment>
            <div className={classMenu} onClick={onOpen}> <HamburgIcon event={open}/></div>
            {
                open ? (<OverlayMenu onOpen={onOpen}></OverlayMenu>) : (<></>)
            }
        </Fragment>
    )
}

