import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../Components/InnerBanner/InnerBanner";

export class Consultancy extends Component {
  articles = [
    {
      title: "Consultancy",
      discriptions: "See the bigger picture",
      imgUrl: "../Images/consultancy-header.jpg",
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
                  <h1>Consultancy</h1>
                </div>

                <p className="text-center">
                  Our software consultants review the current business processes
                  and software being used and provide a strategy to improve
                  these by implementing new / changed business processes,
                  enhancing current software or implementing new software.
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default Consultancy;
