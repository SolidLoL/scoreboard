import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { AnimeCard } from '../AnimeCard';
import { Row, Col, Container } from "react-bootstrap";
import './style.scss';

export const AnimeList = () => {
  const animes = useContext(AppContext)
  return (
    <Container className="AnimeList" fluid>
      <Row className="m-0 my-3"> 
        {(typeof animes.animes == undefined) ? "error" : animes.animes.map(anime => <Col className="px-2" xs={12} sm={6} lg={3} key={anime.anilist_id}><AnimeCard  anime={anime} /></Col>)}
      </Row>
    </Container>
  )

}