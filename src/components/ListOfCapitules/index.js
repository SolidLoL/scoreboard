import React, { Fragment } from 'react'
import useListOfCapitules from '@hooks/useListOfCapitules'
import {Capitule} from '@components/Capitule'
import './style.scss'

export const ListOfCapitules = ({ ...data }) => {
    console.log('Capitules')
    const {capitules,loading} = useListOfCapitules(data?.sources);
    return (
        <div className='capitules-list'>
            {
                (loading && capitules.length > 0)? capitules.map((capitule, i) => {
                    return (<Capitule key={i} capitule={capitule} data={data}></Capitule>)
                }) : <></>
            } 
        </div>
    )
}
