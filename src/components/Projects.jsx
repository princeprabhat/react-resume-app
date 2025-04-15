import React from "react";
const projectsData = [
  {
    id: 1,
    name: "QKart",
    stack: [],
    points: [
      "Engineered a full-stack eCommerce platform with responsive UI using React, Material UI, Express.js, and React Router DOM.",
      "Implemented secure authentication via JWT and Passport for user login, registration, and session management.",
      "Crafted robust cart and checkout workflows with wallet integration, address selection, and purchase confirmation.",
      "Launched frontend on Vercel and backend on Render with MongoDB, enabling smooth and scalable deployment.",
    ],

    link: "https://qkart-frontend-alpha-seven.vercel.app/",
    type: "Full Stack eCommerce Application",
  },
  {
    id: 2,
    name: "XMedify",
    stack: [],
    points: [
      "Engineered a responsive multi-page UI with React and media queries for consistent experience across devices.",
      "Created dropdown filters for state and city using APIs, enhancing the hospital search experience.",
      "Designed interactive components like FAQ, offer banner, hospital filter, and booking calendar modal.",
      "Leveraged localStorage for data persistence, configured routing with React Router, and launched via Vercel.",
    ],

    link: "https://x-medify-roan.vercel.app/",
    type: "Frontend Hospital Booking Application",
  },
  {
    id: 3,
    name: "Qtify",
    stack: [],
    points: [
      "Built a responsive music streaming platform using React and Material UI with intuitive UI components.",
      "Implemented custom card sliders with Swiper.js, featuring personalized navigation controls.",
      "Fetched and rendered albums and songs from Qtify API with conditional display logic.",
      "Leveraged react-router-dom for seamless navigation and deployed the app on Vercel.",
    ],

    link: "https://qtify-frontend-gamma.vercel.app/",
    type: "Frontend Music Streaming Application",
  },
  {
    id: 4,
    name: "Gauras",
    stack: [],
    points: [
      "Created a 6-page responsive dairy product website using Vanilla JS, HTML, CSS, and Bootstrap.",
      "Incorporated interactive elements like an image slider, contact form with validation, and Google Captcha.",
      "Enhanced image performance, reducing load time by 50%, and deployed the website on Hostinger.",
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
