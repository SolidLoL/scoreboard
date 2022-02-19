import React, { useContext } from 'react'
import Context from '@context/NavigationContext'


const HamburgIcon = () => {
    return (
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className='top-menu' width="100%" height="2.70769" />
            <rect className='middle-menu' height="2.70769" width="100%" x="0" y="10" rx="1.35385" />
            <rect className='bottom-menu' x="0" y="20" width="100%" height="2.70769" rx="1.35385" />
        </svg>
    )
}

export const Hamburg = () => {
    const {openMenu, setopenMenu, search} = useContext(Context)

    const handlerOpenMenu = () => {
        setopenMenu(!openMenu);
    }
     let visibilitiMenu = (search)? 'invisible':'visible';
     let classMenu = (!openMenu) ? 'menu-close' : 'menu-open';

    return (<div className={`menu ${classMenu} ${visibilitiMenu}`} onClick={handlerOpenMenu}> <HamburgIcon /></div>)
}

