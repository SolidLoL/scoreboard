import React from "react";
import { Hamburg } from "@components/Hamburg";
import { Logo } from "@components/Logo";
import { OverlayMenu } from '@components/OverlayMenu';
import {NavSearch} from '@components/NavSearch';
import "./style.scss";

import { NavigationContextProvider } from "@context/NavigationContext.js";

import { Navbar, Container, Row } from "react-bootstrap";

export const Navigation = () => {
  return (
    <NavigationContextProvider>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="degrade"
        variant="dark"
      >
        <Container fluid>
          <Row>
            <Hamburg />
            <OverlayMenu />
          </Row>
          <Row >
            <Navbar.Brand href="/" className="mx-auto">
              <Logo />
            </Navbar.Brand>
          </Row>
          <Row >
            <NavSearch/>
          </Row>
        </Container>
      </Navbar>

    </NavigationContextProvider>
  );
};
