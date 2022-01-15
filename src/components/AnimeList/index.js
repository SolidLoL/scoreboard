import React, { useContext } from 'react';
import Context from '@context/AppContext';
import { Spinner } from '@components/Spinner'
import { AnimeCard } from '../AnimeCard';
import { Row, Col, Container } from "react-bootstrap";
import './style.scss';

export const AnimeList = ({ animelist = [] }) => {
  return (
    <Container className="AnimeList" fluid>
      <Row className="m-0 my-3">
        {!(animelist.length > 0) ? <Spinner /> : animelist?.map(anime => <Col className="px-2" xs={12} sm={6} lg={3} key={anime.anilist_id}><AnimeCard anime={anime} /></Col>)}
      </Row>
    </Container>
  )

}