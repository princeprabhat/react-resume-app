import React from "react";

const experienceObj = [
  {
    name: "Wipro Technologies",
    position: "Operations Developer, IAM",
    tenure: "10/2021 - 06/2024",
    skills: ["SailPoint", "OIM", "AD", "Java", "MySQL", "Postman", "PuTTY"],
    points: [
      "Optimized Oracle/SQL databases, cutting query time by 40% and maintaining 99.9% uptime.",
      "Tested 50+ APIs with Postman, reducing errors by 30%.",
      "Contributed to SailPoint onboarding, improving connector performance by 25%.",
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
      "Built 10+ client websites with WordPress, Elementor, and WPBakery, improving client satisfaction by 30%.",
      "Optimized 15+ sites, cutting load times by 40% and improving SEO rankings by 25%.",
      "Managed 5+ projects on Trello, converting 20 Figma designs and earning Employee of the Month.",
      "Improved the company core website's performance by 35%, enhancing design and user engagement.",
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
