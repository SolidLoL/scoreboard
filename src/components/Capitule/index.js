import React, { Fragment } from 'react';
import { Link  } from 'react-router-dom';
import './style.scss';
/* Componente Capitule */
export const Capitule = ({ data , capitule}) => {
    let empty = Object.entries(data).length > 0 ? true : false;
    return (
        <Link to ={`${capitule.number}`} className='capitule position-relative overflow-hidden my-3 mx-md-2 text-decoration-none' data={data}>
            {
                (empty) ? (
                    <Fragment>
                        <img className='position-absolute w-100' src={data?.cover_image}></img>
                        <div className='episode position-relative'>episode {capitule.number}</div>
                    </Fragment>
                ) : (<div></div>)
            }
        </Link>
    )
}