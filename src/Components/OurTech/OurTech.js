import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import OurTechItemItem from "./OurTechItem";

export class OurTechItem extends Component {
  articles = [
    {
      title: "Front-End",
      titleHover: "Work With Us",
      imgUrl: "./Images/front-end-developers-black.png",
      imgAlt: "Front-End",
      id: 1,
    },

    {
      title: "Full-Stack",
      titleHover: "Work With Us",
      imgUrl: "./Images/full-stack-black.png",
      imgAlt: "Full-Stack",
      id: 2,
    },

    {
      title: "Angular",
      titleHover: "Work With Us",
      imgUrl: "./Images/angular-black.png",
      imgAlt: "Angular",
      id: 12,
    },

    {
      title: "Node.js",
      titleHover: "Work With Us",
      imgUrl: "./Images/node-js-black.png",
      imgAlt: "Node.js",
      id: 3,
    },

    {
      title: "JavaScript",
      titleHover: "Work With Us",
      imgUrl: "./Images/javascript-black.png",
      imgAlt: "JavaScript",
      id: 4,
    },

    {
      title: "React",
      titleHover: "Work With Us",
      imgUrl: "./Images/react-black.png",
      imgAlt: "React",
      id: 5,
    },

    {
      title: ".NET",
      titleHover: "Work With Us",
      imgUrl: "./Images/dotnet-black.png",
      imgAlt: ".NET",
      id: 6,
    },

    {
      title: "Java",
      titleHover: "Work With Us",
      imgUrl: "./Images/java-black.png",
      imgAlt: "Java",
      id: 7,
    },

    {
      title: "Scala",
      titleHover: "Work With Us",
      imgUrl: "./Images/scala-black.png",
      imgAlt: "Scala",
      id: 8,
    },

    {
      title: "PHP",
      titleHover: "Work With Us",
      imgUrl: "./Images/php-black.png",
      imgAlt: "PHP",
      id: 9,
    },

    {
      title: "C/C++",
      titleHover: "Work With Us",
      imgUrl: "./Images/ccblack.png",
      imgAlt: "C/C++",
      id: 10,
    },

    {
      title: "Magento",
      titleHover: "Work With Us",
      imgUrl: "./Images/magento-black.png",
      imgAlt: "Magento",
      id: 11,
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
      <section className="bg-light section">
        <Container>
          <div className="main-heading text-center mb-4">
            <h1>Our Tech Stack | Full Stack Developers</h1>
          </div>

          <Row xs={1} md={6} className="g-4">
            {this.state.articles.map((element) => {
              return (
                <Col key={element.id} sm="6" md="4" lg="3" xl="2">
                  <OurTechItemItem
                    title={element.title}
                    // hoverTitle={element.titleHover}
                    imgUrl={element.imgUrl}
                    imgAlt={element.imgAlt}
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

export default OurTechItem;
