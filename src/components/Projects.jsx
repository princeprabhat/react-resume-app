import React from "react";
const projectsData = [
  {
    id: 1,
    name: "QKart",
    stack: [],
    points: [
      "Developed a full-stack eCommerce platform with responsive UI using React, Material UI, Express.js, and React Router DOM.",
      "Implemented secure authentication with JWT and Passport, supporting login, registration, and session handling.",
      "Built complete cart and checkout features with wallet integration, dynamic address, and purchase confirmation flow.",
      "Deployed frontend on Vercel and backend on Render with MongoDB, ensuring seamless full-stack cloud deployment.",
    ],
    link: "https://qkart-frontend-alpha-seven.vercel.app/",
    type: "Full Stack eCommerce Application",
  },
  {
    id: 2,
    name: "XMedify",
    stack: [],
    points: [
      "Built a responsive multi-page frontend using React and media queries for seamless cross-device experience.",
      "Integrated API-based dropdowns to filter hospitals by state and city, enhancing user navigation.",
      "Developed major UI components like FAQ, offer banner, hospital search, and calendar booking modal.",
      "Used localStorage for booking data persistence, implemented routing with react-router-dom, and deployed on Vercel.",
    ],
    link: "https://x-medify-roan.vercel.app/",
    type: "Frontend Hospital Booking Application",
  },
  {
    id: 3,
    name: "Qtify",
    stack: [],
    points: [
      "Developed a responsive music streaming app using React and Material UI with clean UI components.",
      "Integrated Swiper.js for dynamic card sliders with custom navigation controls.",
      "Fetched and displayed albums and songs from Qtify backend API with conditional rendering.",
      "Used react-router-dom for navigation and deployed the application on Vercel.",
    ],
    link: "https://qtify-frontend-gamma.vercel.app/",
    type: "Frontend Music Streaming Application",
  },
  {
    id: 4,
    name: "Gauras",
    stack: [],
    points: [
      "Developed a 6-page responsive dairy product website using Vanilla JS, HTML, CSS, and Bootstrap.",
      "Added interactive features like image slider, contact form with validation, and Google Captcha.",
      "Optimized images for performance and deployed the site on Hostinger.",
    ],
    link: "https://gauras.co.in/",
    type: "Frontend Dairy Product Application",
  },
  //   { id: 5, name: "Infometrix", stack: [], points: [], link: "", type: "" },
];

const Projects = () => {
  return (
    <div className="mt-1">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase ">
        Projects
      </p>
      <div className="">
        {projectsData.map((el, idx) => {
          return (
            <div key={idx} className="border-r-2 pr-2 leading-none">
              <div className="flex gap-2 items-center">
                <span className="font-medium text-sm">{el.name} -</span>
                <span className="text-xs font-medium text-slate-600">
                  {el.type}
                </span>

                <a
                  href={el.link}
                  className="text-xs bg-slate-500 text-slate-50 px-1 font-bold rounded "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
              </div>
              <ul className="list-disc list-outside px-5 text-xs text-slate-800">
                {el.points.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
              </ul>

              <span className="text-slate-300 font-medium">
                ----------------------------
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
