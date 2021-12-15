import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hamburg } from "@components/Hamburg";
import { Logo } from "@components/Logo";
import Icon from "@assets/Icon.svg";
import "./style.scss";

import { Navbar, Container, Nav, Row, Offcanvas, Button } from "react-bootstrap";

export const Navigation = () => {
  const [expand, setexpand] = useState();
  const onExpand = () => {
    if (!expand) {
      setexpand(expand);
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="degrade"
      variant="dark"
      fixed="top"
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
          <Link to="/search" className="mx-auto">
            <img src={Icon}></img>
          </Link>
        </Row>
      </Container>
    </Navbar>
  );
};
