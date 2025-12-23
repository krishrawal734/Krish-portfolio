import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import GithubstarBtn from "../atoms/githubBtn/GithubstarBtn";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
      <div className="card-footer">
        <GithubstarBtn href={props.ghLink} btnText={props.isBlog ? "Blog" : "GitHub"} />
        {!props.isBlog && !!props.demoLink && (
          <GithubstarBtn href={props.demoLink} btnText={"Demo"} icon={<CgWebsite />} />  
        )}
      </div>
    </Card>
  );
}
export default ProjectCards;
