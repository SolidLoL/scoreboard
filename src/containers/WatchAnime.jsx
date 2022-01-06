import React from 'react'
import { useParams } from "react-router-dom";

const WhatchAnime = ({props}) => {
    const params = useParams();
    console.log(props)
    console.log(params)
    return ( <div>You`re whatchn the episode</div>)

}

export default WhatchAnime;
