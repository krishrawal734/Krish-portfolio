import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/images/home-avatr.png";
import Particle from "../Particle";
import HomeFooter from "./HomeFooter";
import Type from "./Type";
import data from "../../data.json";

function Home() {
  return (
    <section>
      <Container fluid className="home-section py-5" id="home">
        <Container className="home-content">
          <Particle />
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 className="heading mb-2">
                Hi There!&nbsp;
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M&nbsp;
                <strong className="main-name">{data.name}</strong>
              </h1>

              <div>
                <Type />
              </div>
            </Col>

            <Col md={5} className="pb-3 mt-5 text-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeFooter />
    </section>
  );
}

export default Home;
