import React from 'react'
import useListOfCapitules from '@hooks/useListOfCapitules'
import { Capitule } from '@components/Capitule'
import './style.scss'

export const ListOfCapitules = ({ data }) => {

    const { capitules, loading } = useListOfCapitules(data?.sources);

    return (
        <div className='capitules-list container grid px-3 px-md-0'>
            {
                (loading && capitules.length > 0) ? capitules.map((capitule, i) => {
                    return (<Capitule key={i} capitule={capitule} data={data}></Capitule>)
                }) : <></>
            }
        </div>
    )
}
