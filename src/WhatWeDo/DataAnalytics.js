import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../Components/InnerBanner/InnerBanner";

export class DataAnalytics extends Component {
  articles = [
    {
      title: "Data Analytics",
      discriptions: "Discover meaningful findings",
      imgUrl: "../Images/dataAnalytics-header.jpg",
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
                  <h1>Data Analytics</h1>
                </div>
                <p className="text-center">
                  Nowadays, companies across domains are willing to record user
                  interactions with their products or services to identify
                  trends, patterns, anything to gain insight into their target
                  market and make appropriate business decisions that will
                  propel them toward success and improve their overall
                  performance.In business intelligence, exploring this
                  invaluable user interaction data takes the form of data
                  visualisation.
                </p>
                <p className="text-center">
                  Our data and analytics services transform hidden system data
                  into interactive reports that highlight key trends and
                  insights about your business.
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default DataAnalytics;
