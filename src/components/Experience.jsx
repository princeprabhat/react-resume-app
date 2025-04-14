import React from "react";

const experience = [
  "Maintained Oracle and SQL databases, ensuring performance and system stability.",
  "Used Postman for API testing and system configurations to streamline integrations.",
  "Monitored and optimized server performance, focusing on logs, application settings, and uptime.",
  "Contributed to SailPoint onboarding, collaborating on Java-based data cluster code and optimizing connector performance.",
];

const Experience = () => {
  return (
    <div className="mt-3">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase ">
        Experience
      </p>
      <ul className="list-disc list-outside px-5 text-xs text-slate-800">
        {experience.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
