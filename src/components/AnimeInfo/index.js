import React, {/* useState,useEffect, */ useContext, Fragment} from 'react';
import { useNavigate } from "react-router-dom";
import {useWindowSize} from '@hooks/useWindowSize';
import { Stars } from "@components/Stars";
import "./style.scss";


export const AnimeInfo = (data) => {
    const navigate = useNavigate();
    const window = useWindowSize();

    return ( 
        <div className='anime-info-card' style={{ backgroundImage: `url(${(window.width > 768)? data.data.banner_image: data.data.cover_image })` }} >
            <div className="container anime-info-header">
              <div className="close d-flex align-content-center" onClick={() => navigate(-1)}>
                <span className="material-icons">close</span>
              </div>
            </div>
            <div className="container-fluid anime-info-body">
                <div className="title">{data.data?.titles?.en}</div>
                <div className='stars-info'>
                    {typeof data.data?.score != "undefined" ? (
                    <Stars score={data?.data.score} />
                    ) : (
                    <></>
                    )}
                </div>

          </div>
        </div>
    );
}
