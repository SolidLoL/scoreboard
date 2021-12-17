import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { AnimeCard } from '../AnimeCard';
import { Row, Col, Container } from "react-bootstrap";
import './style.scss';

export const AnimeList = () => {
  const animes = useContext(AppContext)
  return (
    <Container className="AnimeList">
      <Row className="m-0"> 
        {(typeof animes.animes == undefined) ? "error" : animes.animes.map(anime => <Col className="p-0" xs={12} sm={6} lg={4} key={anime.anilist_id}><AnimeCard  anime={anime} {...anime} /></Col>)}
      </Row>
    </Container>
  )

}