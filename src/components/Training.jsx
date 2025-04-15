import React from "react";
const points = [
  "Gained hands-on experience with JS, React, Express, NoSQL, Docker, AWS, and Linux via industry-style projects.",
  "Learned real-world development workflows, system design, and deployment best practices.",
];
const Training = () => {
  return (
    <div className="mt-3">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase leading-none">
        Training
      </p>
      <div className="pl-2">
        <span className="text-xs font-semibold text-slate-800 mr-2">
          Full Stack Development Program - Crio.Do (2024 - Present)
        </span>
        <a
          href="https://www.crio.do/learn/portfolio/princeprabhat1996/"
          className="text-xs bg-slate-500 text-slate-50 px-1 font-bold rounded "
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <ul className="list-disc list-outside px-5 text-xs text-slate-700">
          {points.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Training;
