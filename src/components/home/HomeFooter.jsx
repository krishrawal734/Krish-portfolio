import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import data from "../../data.json";

function HomeFooter() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="mb-5">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} className="my-3">
              LET ME <span className="golden"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like&nbsp;
              <i>
                <b className="golden">{
                  data.languageknow.map((language) => {
                    return language + ", ";
                  })
                }</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="golden">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="golden">Node.js</b> and
              <i>
                <b className="golden">
                  &nbsp;
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like                  &nbsp;

              <i>
                <b className="golden">{data.libraryknow.map((lib) => {
                  return lib + ", ";
                })}</b>
              </i>
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar mt-5">
            <Tilt>
              <img src={myImg} className="img-fluid"  alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social mt-3 mb-5">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="golden">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={data.github_id}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href={data.linkedin_id}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href={data.insta_id}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomeFooter;
