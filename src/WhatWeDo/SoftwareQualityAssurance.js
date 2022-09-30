import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../Components/InnerBanner/InnerBanner";

export class SoftwareQualityAssurance extends Component {
  articles = [
    {
      title: "Software Quality Assurance",
      discriptions: "Better Quality Products",
      imgUrl: "../Images/softwareQualityAssurance-header.jpg",
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

        <Container>
          <section className="inner-section">
            <Row className="justify-content-center">
              <Col xs sm="10" lg="8">
                <div className="main-heading text-center">
                  <h1>Software Quality Assurance</h1>
                </div>

                <p className="text-center">
                  We offer a wide range of software testing services for both
                  web and mobile applications. Our long-term experience and
                  advanced technologies let us provide top-notch testing
                  services and create complex solutions to provide the high
                  quality of your software. Our offerings also include QA
                  process design and setup and responsibility for the quality of
                  your project.
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default SoftwareQualityAssurance;
