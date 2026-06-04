import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import DownloadBtn from "../atoms/downloadBtn/DownloadBtn";
import pdf from "../../assets/resume/KRISHRAWAL-CV.pdf";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Single Download Button */}
      <Row className="justify-content-center mb-4">
        <DownloadBtn />
      </Row>

      {/* Resume PDF Center */}
      <Row className="justify-content-center">
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "1000px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            src={pdf}
            title="Resume"
            width="100%"
            height="100%"
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          />
        </div>
      </Row>
    </Container>
  );
}

export default ResumeNew;