import React from "react";
import { Col, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import data from "../../data.json";


const allIcons = { ...FaIcons, ...SiIcons, ...AiIcons, ...TbIcons }; // Merge all icons into one object
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {data.technicaltools.map((skill, index) => {
        const IconComponent = allIcons[skill.icon];
        return (
          <Col xs={4} md={2} className="tech-icons">
            <IconComponent />
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
