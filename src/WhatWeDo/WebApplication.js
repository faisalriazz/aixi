import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../Components/InnerBanner/InnerBanner";

export class WebApplication extends Component {
  articles = [
    {
      title: "Web Application",
      discriptions: "Solutions to turbo charge your business",
      imgUrl: "../Images/webApplication-header.jpg",
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
            <div className="main-heading text-center">
              <h1>Web Application</h1>
            </div>
            <Row className="justify-content-center">
              <Col xs sm="10" lg="8">
                <p className="text-center">
                  Web Applications are a powerful tool in today's world and
                  enable businesses to streamline critical business processes.
                  Our flexible solutions can run across multiple platforms
                  regardless of operating system.
                </p>

                <div className="list-container">
                  <ul className="custom-list">
                    <li>Web / Business Applications</li>
                    <li>Bespoke CRM Systems</li>
                    <li>Customer / Client Portals</li>
                    <li>Mobile Applications</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default WebApplication;
