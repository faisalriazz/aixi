import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class WorkWith extends Component {
  render() {
    let { imgUrl } = this.props;

    return (
      <div>
        <Card className="rounded-0">
          <Card.Body className="p-0">
            <img src={imgUrl} className="w-100" alt="img" />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default WorkWith;
