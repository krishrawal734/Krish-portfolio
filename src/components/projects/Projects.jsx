import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import data from "../../data.json";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="golden">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data.projects.map((project, index) => {
            return (
              <Col md={4} className="my-4 px-3" key={index}>
                <ProjectCard
                  imgPath={project.project_thumbnail}
                  isBlog={false}
                  title={project.name}
                  description={project.description}
                  ghLink={project.github_url}
                  demoLink={project.demo_link}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
