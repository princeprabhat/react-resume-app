import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;

    html2pdf()
      .set({
        margin: 0,
        filename: "my-document.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      })
      .from(element)
      .save();
  };
  return (
    <div className="bg-white font-resume p-5" ref={contentRef}>
      <p className="text-resume-title font-bold text-5xl">hello</p>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default Resume;
