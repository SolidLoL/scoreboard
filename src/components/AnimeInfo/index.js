import React, {/* useState,useEffect, */ useContext, Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import { useWindowSize } from '@hooks/useWindowSize';
import { Button } from "@components/Button";
import { Stars } from "@components/Stars";
import "./style.scss";


export const AnimeInfo = ({ data }) => {
  const navigate = useNavigate();
  const window = useWindowSize();
  return (
    <div className='anime-info-card' style={{ backgroundImage: `url(${(window.width > 768) ? data?.banner_image : data?.cover_image})` }} >
      <div className="container anime-info-header">
        <div className="close d-flex align-content-center" onClick={() => navigate(-1)}>
          <span className="material-icons">close</span>
        </div>
      </div>
      <div className="container-fluid anime-info-body py-3">
        <div className="title">{data?.titles?.en}</div>
        <div className='stars-info'>
          {typeof data?.score != "undefined" ? (
            <Stars score={data?.score} />
          ) : (
            <></>
          )}
        </div>
        <div className="actions d-flex flex-sm-row flex-column align-items-center w-100">
          <Button type={"primary w-100 my-3 my-sm-0 me-sm-3"} title={"Watch Anime"} url={`anime/${data.id}/1`} />
          <Button type={"outline-primary w-100"} title={"Detail"} url={`anime/${data.id}`} />
        </div>
      </div>
    </div>
  );
}
