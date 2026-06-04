import React from "react";
import "./DownloadBtn.style.css";
import pdf from "../../../assets/resume/KRISHRAWAL-CV.pdf";

const DownloadBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "KRISHRAWAL-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="download-btn"
      type="button"
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};

export default DownloadBtn;