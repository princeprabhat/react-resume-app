import React from "react";

const skills = {
  Frontend: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "React",
    "Next.js",
    "Redux",
    "Redux Toolkit",
    "TanStack Query",
    "Material UI",
    "Mantine",
    "Tailwind CSS",
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
