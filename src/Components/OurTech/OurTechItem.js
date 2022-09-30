import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./OurTech.scss";

export class OurTechItem extends Component {
  render() {
    let { imgUrl, imgAlt, title, hoverTitle, id } = this.props;

    return (
      <>
        <Card className="our-tech" key={id}>
          <Card.Body>
            <Card.Img src={imgUrl} alt={imgAlt} />
            <Card.Title className="heading-1">{title}</Card.Title>
            <Card.Title className="heading-2">{hoverTitle}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default OurTechItem;
