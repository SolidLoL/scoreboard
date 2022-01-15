import React from 'react'
import { Capitule } from '@components/Capitule'
import './style.scss'

export const ListOfCapitules = ({ anime, listOfCapitules }) => {

    return (
        <div className='capitules-list container grid px-3 px-md-0'>
            {
                (Object.entries(listOfCapitules).length > 0) ? listOfCapitules.map((capitule, i) => {
                    return (<Capitule key={i} capitule={capitule} data={anime} ></Capitule>)
                }) : <></>
            }
        </div>
    )

}
