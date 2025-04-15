import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import Header from "./Header";
import Links from "./Links";
import Summary from "./Summary";
import Skills from "./Skills";
// import Tools from "./Tools";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import MiniProjects from "./MiniProjects";
import Certifications from "./Certifications";
import Training from "./Training";

const Resume = () => {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;

    html2pdf()
      .set({
        margin: 0,
        filename: "my-document.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCors: true },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        // pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      })
      .from(element)
      .save();
  };
  return (
    <>
      <div className="bg-gray-50 font-sans pt-4 " ref={contentRef}>
        <Header />
        <Links />
        <div className="flex mx-3 my-2 gap-4">
          <div className="section-left flex-1 ">
            <Summary />
            <Projects />
            <MiniProjects />
            <Certifications />
          </div>
          <div className="section-right flex-1">
            <Skills />
            {/* <Tools /> */}
            <Experience />
            <Education />
            <Training />
          </div>
        </div>
      </div>
      {/* <button onClick={handleDownload}>Download</button> */}
    </>
  );
};

export default Resume;
