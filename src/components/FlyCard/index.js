import React, { useContext, Fragment } from "react";
import { AppContext } from "@context/AppContext";
import { Stars } from "@components/Stars";
import { Button } from "@components/Button";
import {useWindowSize} from '@hooks/useWindowSize';
import "./style.scss";

export const FlyCard = () => {
  const animes = useContext(AppContext);
  const first = animes.animes[1];
  const info =
    first.descriptions.en.length > 0
      ? first.descriptions.en
      : first.descriptions.it;
  const first3 = first.genres.slice(0, 3);

  const window = useWindowSize();
    let coverImage = (window.width > 768)? first.banner_image: first.cover_image;
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
    <div
      className="fly-card"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="title">{first.titles.en}</div>
      <div className="stars-fly">
        <Stars score={first.score} />
      </div>
      <div className="info">
        <div className="type">
          {animes.catalog[first?.format]}{" "}
          <span>
            <TheLine />
          </span>{" "}
          {first?.episodes_count} episodes
        </div>
        <div className="a-info">{info}</div>
        <div className="genres">
          {first3.map((element, i) => {
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
      <div className="actions d-flex flex-sm-row flex-column align-items-center w-100">
          <Button type={"primary w-100 my-3 my-sm-0 me-sm-3"} title={"Watch Anime"} url={"anime/11/1"}/>
          <Button type={"outline-primary w-100"} title={"Detail"} url={"anime/11"}/>
      </div>
    </div>
  );
};
