import React from "react";

const skills = {
  Frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Redux Toolkit",
    "TanStack Query",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Mantine",
    "Swiper.js",
  ],

  Backend: [
    "Node.js",
    "Express",
    "Golang",
    "Gin",
    "Core Java",
    "WebSockets",
    "REST APIs",
    "MySQL",
    "MongoDB",
    "Postgres",
    "Oracle",
  ],
  Testing: ["Jest", "Cypress", "Testing Library"],
  Tools: [
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
  ],
};

const Skills = () => {
  return (
    <div className="">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase">
        Skills
      </p>
      <div className="skills_container ">
        {Object.entries(skills).map(([title, item]) => {
          return (
            <div key={title} className="mb-1 gap-2">
              <div>
                <span className="text-sm font-semibold bg-slate-200 px-1">
                  {title}
                </span>
              </div>
              <div className="flex flex-wrap gap-1 pt-1 ">
                {item.map((el, idx) => {
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
        })}
      </div>
    </div>
  );
};

export default Skills;
