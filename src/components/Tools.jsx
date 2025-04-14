import React from "react";

const tools = [
  // DevOps & Cloud
  "AWS",
  "Docker",
  "CI/CD",
  "GitHub Actions",
  "Jenkins",
  "GitLab",

  // Deployment Platforms
  "Vercel",
  "Render",
  "Netlify",
  "Heroku",

  // Development & Scripting
  "Git",
  "Linux",
  "Bash / Shell Scripting",
  "NGINX",

  // API & Testing Utilities
  "Postman",

  // Design & Collaboration
  "Figma",
  "Trello",
  "Jira",

  // Editors / IDEs
  "VS Code",
  "Sublime",
];

const Tools = () => {
  return (
    <div className="mt-2">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase mb-1 ">
        Tools
      </p>
      <div className="flex flex-wrap gap-1">
        {tools.map((el, idx) => {
          return (
            <span
              key={idx}
              className="border border-slate-400 text-xs font-medium p-1"
            >
              {el}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
