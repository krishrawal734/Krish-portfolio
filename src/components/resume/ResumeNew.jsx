import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

import pdf from "../../assets/resume/KRISHRAWAL-CV.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import DownloadBtn from "./atoms/downloadBtn/DownloadBtn";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="justify-content-center mb-4">
          <DownloadBtn />
        </Row>

        <Row className="justify-content-center">
          <Document
            file={pdf}
            loading="Loading Resume..."
            error="Failed to load PDF"
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>

        <Row className="justify-content-center mt-4">
          <DownloadBtn />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;