import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Images/AIXI.png";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <div>
      <Navbar className="header-navebar" bg="white" expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/OurStory" className="nav-link">
                Our Story
              </Link>

              <NavDropdown title="What We Do" id="basic-nav-dropdown">
                <NavDropdown.Item className="nav-link">
                  <Link to="/WhatWeDo/TeamAugmentation">Team Augmentation</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="nav-link">
                  <Link to="/WhatWeDo/WebApplication">Web Application</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="nav-link">
                  <Link to="/WhatWeDo/WebDesign">Web Design</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="nav-link">
                  <Link to="/WhatWeDo/Consultancy">Consultancy</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="nav-link">
                  <Link to="/WhatWeDo/SoftwareQualityAssurance">
                    Software Quality Assurance
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="nav-link">
                  <Link to="/WhatWeDo/DataAnalytics">Data Analytics</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Link to="/OurClients" className="nav-link">
                Our Clients
              </Link>

              <Link to="/contact" className="nav-link">
                Contact Information
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
