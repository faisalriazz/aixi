import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import "./Carousel.scss";
import CarouselVideo from "../../Video/videoLoop.mp4";

function UncontrolledExample() {
  return (
    <Carousel className="homeCarousel">
      <Carousel.Item>
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          data-aos="fade-up"
          id="video"
        >
          <source src={CarouselVideo} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <Container>
            <h1>DELIVERING BESPOKE SOFTWARE</h1>
            <br />
            <h3>The Best We can Do</h3>
            <p className="mt-5">
              Since 2003, we've used our expertise and knowledge to develop
              innovative solutions for our clients
            </p>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
