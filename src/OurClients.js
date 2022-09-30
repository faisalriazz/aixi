import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.scss";
import InnerBanner from "./Components/InnerBanner/InnerBanner";
// import OurTech from "./Components/OurTech/OurTech";
import WorkWith from "./Components/WorkWith/WorkWith";

export class About extends Component {
  articles = [
    {
      title: "Our Clients",
      discriptions: "People we work with",
      imgUrl: "./Images/ourClients-header.jpg",
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

        {/* <OurTech /> */}

        <WorkWith />
      </>
    );
  }
}

export default About;
