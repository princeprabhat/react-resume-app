import React from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Mantine UI",
  "Material UI",
  "ShadCn",
  "Node.js",
  "Express",
  "Golang",
  "Gin",
  "PostgreSQL",
  "MongoDB",
  "Mongoose",
  "Prisma",
  "Postgres",
"Graphql",
  "AWS",
  "Docker",
  "Jenkins",
  "GitHub Actions",
  "NGINX",
  "Linux",
  "Git",
  "Jest",
  "Cypress",
];


const Skills = () => {
  return (
    <div className="">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase">
        Skills
      </p>
      <div className="skills_container ">
      
            <div className="gap-2">
              <div className="flex flex-wrap gap-1 ">
                {skills.map((el, idx) => {
                  return (
                    <span
                      key={idx}
                      className=" text-xs font-medium"
                    >
                      {el}{idx==skills.length-1?".":","}
                    </span>
                  );
                })}
              </div>
            </div>
          
       
      </div>
    </div>
  );
};

export default Skills;
