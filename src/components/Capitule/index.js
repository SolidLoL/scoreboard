import React, { Fragment } from 'react'

/* Componente Capitule */
export const Capitule = ({ ...data }) => {
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