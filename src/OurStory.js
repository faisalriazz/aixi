import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "./Components/InnerBanner/InnerBanner";

export class OurStory extends Component {
  articles = [
    {
      title: "Our Story",
      discriptions: "About the Company",
      imgUrl: "./Images/ourStory-header.jpg",
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
                  <h1>Our Story</h1>
                </div>
                <p className="text-center">
                  AIXI is a custom software development company in Lahore.
                  Established in 2020, we have an excellent reputation for
                  delivering innovative solutions to a wide ranging client base.
                  We specialise in bespoke CRM systems ,complex web based
                  business applications, Software Quality Assurance, Mobile
                  Applications, CMS Website Development, Data Analytics and
                  Power BI solutions.Working in partnership with our clients, we
                  build applications that improve business efficiency, increase
                  profitability and provide a competitive advantage.We are keen
                  advocates of the Agile project management methodologies. The
                  Agile approach embraces collaboration with customers,
                  face-to-face communication, frequent delivery and the ability
                  to respond to changing requirements.
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default OurStory;
