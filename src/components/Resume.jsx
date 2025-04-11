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
    <div className="bg-gray-50 font-resume p-5" ref={contentRef}>
      <div className="resume-introduction flex justify-between align-middle">
        <div>
          <p className="text-slate-800 font-bold text-4xl pb-1">
            Prince Prabhat
          </p>
          <p className="text-lg font-medium text-slate-600 ml-1 ">
            Full Stack Developer
          </p>
        </div>

        <div className="text-sm  text-slate-700 leading-7">
          <a href="tel:+919304692093" className="block hover:underline">
            📞 +91-9304692093
          </a>
          <a
            href="mailto:princeprabhat1996@gmail.com"
            className="block hover:underline"
          >
            📧 princeprabhat1996@gmail.com
          </a>
          <p>🏠 Haridwar, Uttarakhand, India</p>
        </div>
      </div>

      {/* <button onClick={handleDownload}>Download</button> */}
    </div>
  );
};

export default Resume;
