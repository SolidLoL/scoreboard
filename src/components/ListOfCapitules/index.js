import React, { useState, useEffect, Fragment } from 'react'
import useListOfCapitules from '@hooks/useListOfCapitules'
import './style.scss'

export const ListOfCapitules = ({ ...data }) => {
    console.log('Capitules')
    const listofcapitules = useListOfCapitules(data?.sources);
    const caps = listofcapitules?.capitules || [];

    /* Componente Capitule */
    const Capitules = ({ ...data }) => {
        let empty = Object.entries(data).length > 0 ? true : false;
        return (
            <div className='capitule'>
                {
                    (empty) ? (
                        <Fragment>
                            <img src={data?.data?.cover_image}></img>
                            <div className='episode'>episode {data.capitule.number}</div>
                        </Fragment>
                    ) : (<div></div>)
                }
            </div>
        )
    }
    return (
        <div className='capitules'>
            {
                (caps.length > 0)?caps.map((capitule, i) => {
                    return (<Capitules key={i} capitule={capitule} data={data}></Capitules>)
                }) : <></>
            }
        </div>
    )
}
