import React,{useState} from "react";
// import { Link } from "react-router-dom";
import { Hamburg } from "@components/Hamburg";
import { Logo } from "@components/Logo";
// import Icon from "@assets/Icon.svg";
import './style.scss';

import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

export const Navigation = () => {
    const [expand, setexpand] = useState();
    const onExpand = () => {
        if(!expand){
            setexpand(expand);
        }
    };
  return (
    <Navbar collapseOnSelect expand="lg" bg="degrade" variant="dark" fixed="top" >
    <Container>
    <Navbar.Brand href="/"><Logo/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={onExpand} as="div"><Hamburg/>
        </Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

