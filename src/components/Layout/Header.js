import React, { useContext } from 'react'
import { Navigation } from '@components/Navigation';
import Context from "@context/AppContext";
export const Header = () => {
    const { navigation } = useContext(Context);

    const VisibleNavigation = navigation ? `d-block` : `d-none`;
    return (
        <div className={`header ${VisibleNavigation}`} >
            <Navigation />
        </div>
    )
}