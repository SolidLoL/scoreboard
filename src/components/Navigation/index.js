import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburg } from "@components/Hamburg";
import { Logo } from "@components/Logo";
import Icon from "@assets/Icon.svg";
import "./style.scss";

import { Navbar, Container,Row } from "react-bootstrap";

export const Navigation = () => {

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="degrade"
      variant="dark"
    >
      <Container fluid>
        <Row>
          <Hamburg/>
        </Row>
        <Row >
          <Navbar.Brand href="/" className="mx-auto">
            <Logo />
          </Navbar.Brand>
        </Row>
        <Row >
          <Link to="/search" className="search mx-auto">
            <img src={Icon}></img>
          </Link>
        </Row>
      </Container>
    </Navbar>
  );
};
