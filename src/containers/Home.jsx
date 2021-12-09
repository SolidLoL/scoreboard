import React, {Fragment} from 'react';

import { FlyCard } from '@components/FlyCard';
import {AnimeList} from '@components/AnimeList';

console.log("ruta HOME")

export const Home = () => {return (
    <Fragment>
        <FlyCard/>
        <AnimeList />
    </Fragment>
)};

//  export default Home;