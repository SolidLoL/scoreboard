import React, { Fragment, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './style.scss';
/* Componente Capitule */
export const Capitule = ({ data, capitule }) => {
    let empty = Object.entries(data).length > 0 ? true : false;
    const navigate = useNavigate();

    const toComponentB = (capitule) => {
        /* const storage =localStorage.getItem('capitule');
        const stringCap = JSON.stringify(capitule);
          if(storage !== stringCap){
              localStorage.clear();
              localStorage.setItem('capitule', stringCap);
          } */
        navigate(`${capitule.number}`);
    }
    return (
        <div onClick={() => { toComponentB(capitule) }} className='capitule position-relative overflow-hidden my-3 mx-md-2 text-decoration-none'>
            {
                (empty) ? (
                    <Fragment>
                        <img className='position-absolute w-100' src={data?.cover_image}></img>
                        <div className='episode position-relative'>episode {capitule.number}</div>
                    </Fragment>
                ) : (<div></div>)
            }
        </div>
    )
}