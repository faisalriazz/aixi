import React, { Component } from "react";
import {  Card, Col, Container, Row } from "react-bootstrap";
import "./Help.scss";

export class HelpSection extends Component {
  render() {
    return (
      <section className="helpsection">
        <Container>
          <Row className="g-4">
            <Col sm="10" md="8" lg="6" xl="6">
              <Card className="rounded-0 border-0">
                <Card.Body>
                  <Card.Title className="text-primary">
                    How can we help?
                  </Card.Title>

                  <Card.Text>
                    Looking to speak to a bespoke software specialist about your
                    next project or looking to rapidly scale your development
                    team?
                  </Card.Text>

                  <Card.Text>
                    Get in touch to see how we can help you.
                  </Card.Text>

                  <a
                    href="/contact"
                    className="rounded-0 btn btn-primary btn-lg"
                  >
                    Work With Us
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default HelpSection;
