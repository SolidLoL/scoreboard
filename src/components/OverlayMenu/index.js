import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export const OverlayMenu = ({ onOpen }) => {
  return (
    <div className="overlay-menu d-flex flex-column align-items-center justify-content-start ">
      <div className="overlay-header align-self-start ">
        <div className="close" onClick={onOpen}>
          <span className="material-icons">close</span>
        </div>
      </div>
      <div className="overlay-body">
        <ul className="nav d-flex flex-column align-items-center" onClick={onOpen}>
          <li className="nav-item ">
            <Link className="nav-link" aria-current="home" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Catalogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Top Anime
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Mi Lista
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
