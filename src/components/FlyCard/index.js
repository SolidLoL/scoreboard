import React, { useContext, Fragment } from "react";
import { Stars } from "@components/Stars";
import { Button } from "@components/Button";
import { useWindowSize } from '@hooks/useWindowSize';
import { Spinner } from '@components/Spinner'
import "./style.scss";

export const FlyCard = ({ anime, catalog }) => {

  const isEmpty = Object.entries(anime).length;
  const { descriptions, banner_image, cover_image, genres,
    titles, score, format, episodes_count } = anime;

  const info = (descriptions?.en?.length > 0)
    ? descriptions?.en
    : descriptions?.it || <></>;
  const selectAnimeGenres = genres?.slice(0, 3);
  const window = useWindowSize();
  let coverImage = (window.width > 768) ? banner_image : cover_image;
  const TheLine = () => (
    <svg
      width="2"
      height="26"
      margin="1rem"
      viewBox="0 0 2 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1V25" stroke="white" strokeLinecap="round" />
    </svg>
  );

  return (
    <>
      {isEmpty > 0 ?
        (<div
          className="fly-card position-relative container-fluid vh-100 d-flex flex-column justify-content-end align-items-start overflow-hidden"
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className="title">{titles?.en}</div>
          <div className="stars-fly">
            <Stars score={score} />
          </div>
          <div className="info">
            <div className="type">
              {catalog[format]}{" "}
              <span>
                <TheLine />
              </span>{" "}
              {episodes_count} episodes
            </div>
            <div className="a-info text-wrap text-break">{info}</div>
            <div className="genres">
              {selectAnimeGenres.map((element, i) => {
                switch (i) {
                  case 1:
                    return (
                      <Fragment key={i}>
                        <span>{element}</span>
                        <TheLine />
                      </Fragment>
                    );
                    break;
                  case 2:
                    return (
                      <Fragment key={i}>
                        <span>{element}</span>
                      </Fragment>
                    );
                    break;
                  default:
                    return (
                      <Fragment key={i}>
                        <span>{element}</span>
                        <TheLine />
                      </Fragment>
                    );
                    break;
                }
              })}
            </div>
          </div>
          <div className="actions container d-flex flex-sm-row flex-column align-items-center w-100 mx-0">
            <Button type={"primary w-100 my-3 my-sm-0 me-sm-3"} title={"Watch Anime"} url={`anime/${anime.id}/1`} />
            <Button type={"outline-primary w-100"} title={"Detail"} url={`anime/${anime.id}`} />
          </div>
        </div>) : (<Spinner />)
      }
    </>
  );
};
