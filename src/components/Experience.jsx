import React from "react";

const experience = [
  "Maintained Oracle/SQL databases and optimized server performance, logs, and uptime.",
  "Used Postman for API testing and configuration to streamline system integrations.",
  "Collaborated on SailPoint onboarding with Java-based data cluster code and connector tuning.",
];
const experienceObj = [
  {
    name: "Wipro Technologies",
    position: "Operations Developer, IAM",
    tenure: "10/2021 - 06/2024",
    skills: ["SailPoint", "OIM", "AD", "Java", "MySQL", "Postman", "PuTTY"],
    points: [
      "Maintained Oracle/SQL databases and optimized server performance, logs, and uptime.",
      "Used Postman for API testing and configuration to streamline system integrations.",
      "Collaborated on SailPoint onboarding with Java-based data cluster code and connector tuning.",
    ],
  },
  {
    name: "iB Arts",
    position: "Web Developer, Intern",
    tenure: "03/2021 - 09/2024",
    skills: [
      "Javascript",
      "Wordpress",
      "HTML",
      "Elementor",
      "Divi",
      "WP-Bakery",
      "SEO",
    ],
    points: [
      "Built and customized client websites using WordPress, Elementor, Divi, WPBakery, and child themes.",
      "Optimized performance and SEO through image compression, CSS/JS minification, and best practices.",
      "Collaborated via Trello, followed Agile workflows, converted Figma designs, and earned Employee of the Month for impactful project delivery.",
      "Delivered Infometrix site solo using WordPress, with full design, optimization, and SEO enhancements.",
    ],
  },
];
const Experience = () => {
  return (
    <div className="mt-2">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase mb-2">
        Experience
      </p>
      <div>
        {experienceObj.map((el, idx) => {
          return (
            <div key={idx} className="mb-2">
              <div className="flex items-center gap-4 h-3 mt-1">
                <span className="text-sm font-semibold text-slate-800">
                  --{el.name}
                </span>
                <span className="text-[8px] font-medium text-slate-500 ">
                  {el.tenure}
                </span>
              </div>

              <div className="pl-2 mb-1">
                <span className="text-[10px] text-slate-700 font-medium ">
                  {el.position}
                </span>

                <div className="flex gap-1 text-[8px] text-slate-500 font-medium">
                  {el.skills.map((item, idx) => (
                    <span key={idx} className="border-2 px-1">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="list-disc list-outside px-5 text-xs text-slate-700">
                {el.points.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
