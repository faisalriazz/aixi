import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../Components/InnerBanner/InnerBanner";

export class TeamAugmentation extends Component {
  articles = [
    {
      title: "Team Augmentation",
      discriptions: "Scale quickly and efficiently",
      imgUrl: "../Images/augmentation-header.jpg",
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
              <h1>Team Augmentation</h1>
            </div>

            <Row className="justify-content-center">
              <Col xs sm="10" lg="8">
                <p className="text-center">
                  AIXI can assist you with scaling your engineering teams on
                  demand.we have an excellent reputation for delivering
                  innovative solutions to a wide ranging client base. We
                  specialise in bespoke CRM systems and complex web based
                  business applications. Our highly skilled professionals are
                  ready to join your project teams and hit the ground
                  running.Working in partnership with our clients, we build
                  applications that improve business efficiency, increase
                  profitability and provide a competitive advantage.
                </p>
                <p className="text-center">
                  We are keen advocates of the Agile project management
                  methodologies. The Agile approach embraces collaboration with
                  customers, face-to-face communication, frequent delivery and
                  the ability to respond to changing requirements. we can offer
                  fully managed dedicated agile teams consisting of designers,
                  developers, QA engineers etc
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default TeamAugmentation;
