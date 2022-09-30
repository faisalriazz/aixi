import React, { Component } from "react";
import "./Style.scss";
import InnerBanner from "./Components/InnerBanner/InnerBanner";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class Contact extends Component {
  articles = [
    {
      title: "Contact Information",
      discriptions: "Technical Support - Faster",
      imgUrl: "./Images/contact-header.jpg",
      imgAlt: "Banner",
    },
  ];

  constructor() {
    super();

    this.state = {
      articles: this.articles,
    };
  }

  render() {
    return (
      <>
        {this.state.articles.map((element) => {
          return (
            <InnerBanner
              title={element.title}
              discriptions={element.discriptions}
              imgUrl={element.imgUrl}
              imgAlt={element.imgAlt}
            />
          );
        })}

        <div className="inner-section bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col>
                <div class="main-heading text-center mb-4">
                  <h1 className="mb-4">Tell Us What You Need</h1>

                  <p className="mb-5">
                    Please fill in the form below and we'll get in touch to talk
                    about your requirements in more detail.
                  </p>
                </div>
              </Col>
            </Row>

            <Form>
              <Row>
                <Col className="mb-3" xs="12" md="6">
                  <Form.Group>
                    <Form.Label>FIRST NAME</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>

                <Col className="mb-3" xs="12" md="6">
                  <Form.Group>
                    <Form.Label>LAST NAME</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="mb-3" xs="12" md="6">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>

                <Col className="mb-3" xs="12" md="6">
                  <Form.Group>
                    <Form.Label>CONTACT NUMBER</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>COMPANY NAME</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>HOW CAN WE HELP?</Form.Label>
                <Form.Control as="textarea" rows={6} />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit" className="rounded-0">
                  Submit
                </Button>
              </div>
            </Form>
          </Container>
        </div>

        <Container>
          <section className="inner-section">
            <div className="main-heading">
              <h1>Contact Information</h1>
            </div>
            <h3>AIXI Private Limited.</h3>
            <p>
              81 Nasheman Iqbal, Phase I, Khayaban-e-Jinnah, Lahore, Punjab,
              Pakistan.
              <br />
              Phone: +92 42 35316676-77
              <br />
              Website:
              <a
                href="http://www.aixi.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-secondary ms-3"
              >
                www.aixi.pk
              </a>
              <br />
              Email:
              <a
                href="http://E:info@aixi.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-secondary ms-3"
              >
                info@aixi.pk
              </a>
            </p>
          </section>
        </Container>
      </>
    );
  }
}

export default Contact;
