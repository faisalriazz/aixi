import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import "./InnerBanner.scss";
import React, { Component } from "react";

export class InnerBanner extends Component {
  render() {
    let { imgUrl, imgAlt, title, discriptions } = this.props;

    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={imgUrl} alt={imgAlt} />

            <Carousel.Caption>
              <Container>
                <h1>{title}</h1>
                <br />
                <h3>{discriptions}</h3>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default InnerBanner;
