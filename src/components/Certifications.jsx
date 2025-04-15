import React from "react";
const points = [
  "Gained hands-on experience with JS, React, Express, NoSQL, Docker, AWS, and Linux via industry-style projects.",
  "Learned real-world development workflows, system design, and deployment best practices.",
];

const certificate = [
  {
    name: "Python for Everybody Specialization",
    link: "https://coursera.org/share/8067c2768f89d5ffa2a4798664ff5d39",
  },
  {
    name: "Google Cloud IAM and Networking for AWS Professionals",
    link: "https://www.coursera.org/account/accomplishments/certificate/H8YRB33P6H3D",
  },
  {
    name: "Write Professional Emails",
    link: "https://coursera.org/share/ed8a4c80eafec5082f166e01c121b592",
  },
];

const Certifications = () => {
  return (
    <div className="mt-2">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase leading-none mb-1">
        Certifications
      </p>
      <div className="pl-2">
        {certificate.map((el, idx) => {
          return (
            <div
              key={idx}
              className="flex gap-3 text-xs font-semibold text-slate-800 mr-2 leading-4"
            >
              <span>{el.name}</span>
              <a
                href={el.link}
                className="text-[8px] bg-slate-500 text-slate-50 px-1 font-bold rounded "
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
            </div>
          );
        })}
        {/* <ul className="list-disc list-outside px-5 text-xs text-slate-700">
          {points.map((el, idx) => (
            <a href="">
              {" "}
              <li key={idx}>{el}</li>
            </a>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Certifications;
