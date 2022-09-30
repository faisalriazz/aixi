import React, { Component } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Footer.scss";
import HelpSection from "../HelpSection/Help";

export class Footer extends Component {
  render() {
 

    return (
      <>
        <HelpSection />

        <footer>
          <Container>
            <Row>
              <Col xs="12" lg="6" className="text-center">
                <Nav className="justify-content-center justify-content-lg-start mb-2 mb-lg-0">
                  <span className="nav-link text-black px-0">
                    © Copyright 2022.
                  </span>
                  <Nav.Link className="px-0 ms-2">
                    AIXI Applications Limited
                  </Nav.Link>
                </Nav>
              </Col>

              <Col xs="12" lg="6" className="text-lg-end text-center">
                <p className="mb-0">
                  Registered office: 81 nasheman iqbal Phase 1 Lahore Pakistan
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
