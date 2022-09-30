import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InnerBanner from "../Components/InnerBanner/InnerBanner";

export class WebDesign extends Component {
  articles = [
    {
      title: "Web Design",
      discriptions: "Professional, optimised and mobile friendly",
      imgUrl: "../Images/webDesign-header.jpg",
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
              <h1>Web Design</h1>
            </div>

            <Row className="justify-content-center">
              <Col xs sm="10" lg="8">
                <p className="text-center">
                  Websites often provide the first introduction to your business
                  for prospective customers. With an online presence to boost
                  your company profile, the world can find out about you and
                  your business and interact through your website. We provide
                  professional web design services. We have a dedicated team of
                  web designers, user experience ux, web developers, Website
                  optimization experts, UX specialists, content writers & web
                  graphic designers. We provide custom web designing &
                  development solutions to our clients.
                </p>

                <p className="text-center">
                  We love to stay focused on creativity and innovation. We
                  strive hard to make your website stand out amongst your
                  competitors and attract your target audience. Our web
                  designers make sure that your website is clean, equipped with
                  latest design elements, is easy to navigate & follows the
                  latest website design trends. solutions to our clients.
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default WebDesign;
