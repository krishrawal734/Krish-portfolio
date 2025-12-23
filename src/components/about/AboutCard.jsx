import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import data from "../../data.json";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="golden">{data.name}&nbsp;</span>
            from <span className="golden">&nbsp;{data.nativeplace}</span>
            <br />{data.currentstudy}
            <br />
           I Completed My{data.currentjobrole}Course at &nbsp;
            <a
              href={data.currentcompany.website}
              style={{ color: "white" }}
              target="_blank" rel="noreferrer"
            >{data.currentcompany.name}</a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {
              data.otheractivities.map((activity, index) => (
                <li key={index} className="about-activity">
                  <ImPointRight /> {activity}
                </li>
              ))
            }
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"&nbsp;
          </p>
          <footer className="blockquote-footer">{data.nickname}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
