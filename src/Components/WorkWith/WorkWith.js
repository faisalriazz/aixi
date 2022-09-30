import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WorkWithItem from "./WorkWithItem";

export class WorkWith extends Component {
  articles = [
    {
      id: "1",
      urlToImage: "./Images/ffa.jpg",
    },

    {
      id: "2",
      urlToImage: "./Images/huel.jpg",
    },

    {
      id: "3",
      urlToImage: "./Images/kab.jpg",
    },

    {
      id: "4",
      urlToImage: "./Images/nix.jpg",
    },

    {
      id: "5",
      urlToImage: "./Images/sported.jpg",
    },

    {
      id: "6",
      urlToImage: "./Images/white-oak.jpg",
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
      <section className="section">
        <Container>
          <div className="main-heading text-center mb-4">
            <h1>People we work with</h1>
          </div>

          <Row className="g-4">
            {this.state.articles.map((element) => {
              return (
                <Col sm="6" md="4" lg="3" xl="2">
                  <WorkWithItem
                    title={element.title}
                    discription={element.description}
                    imgUrl={element.urlToImage}
                    key={element.id}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

export default WorkWith;
