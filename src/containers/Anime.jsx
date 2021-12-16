import React, { Fragment } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import  useAnimeInfo from '@hooks/useAnimeInfo';
import {useWindowSize} from '@hooks/useWindowSize';
import {Stars} from '@components/Stars';

const Anime = () => {
    let params = useParams();
    const info = useAnimeInfo(params.id);
    const navigate = useNavigate();
    const data = Object.entries(info).length > 0 ? info.anime.data : {};
    const window = useWindowSize();
    let coverImage = (window.width > 768)? data.banner_image: data.cover_image;

console.log(data.score)
  return (
    <Fragment>
      <div className="container anime-info">
        <div className="anime-info-header">
            <div className="close" onClick={() => navigate(-1)}>
                <span className="material-icons">close</span>
            </div>
        </div>
        <div className="anime-info-body" style={{ backgroundImage: `url(${coverImage})` }}>
          {typeof data.score != 'undefined'? (<Stars score={data?.score}/>): <></>}
            <div className="title">{data.titles?.en}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Anime;