import React from "react";
const projectsData = [
 {
    id: 1,
    name: "QKart",
    stack: [],
  points: [
  "Engineered a scalable FullStack application with React, Express.js, Material UI, and MongoDB, delivering a seamless and responsive shopping experience.",
  "Developed a comprehensive Admin Dashboard with role-based access control, enabling product, order, and user management from a unified interface.",
  "Strengthened platform security through JWT- and Passport-based authentication, ensuring protected sessions and secure API access.",
  "Enhanced backend performance with optimized API architecture and efficient database queries.",
  "Deployed the frontend on Vercel and backend on Render, achieving high availability and smooth CI/CD integration for continuous delivery."
],



    link: "https://qkart-frontend-v2-beryl.vercel.app/",
type: "Full-Stack E-commerce Platform"
  },
  
  {
    id: 72,
    name: "NexCall",
    stack: [],
  points: [
  "Built NexCall, a full-stack video calling app using Next.js, TypeScript, Tailwind CSS, and ShadCN UI for a seamless user experience.",
  "Integrated Clerk for secure authentication and Stream API for real-time, low-latency video calls with recording support.",
  "Delivered a scalable, production-ready solution with smooth performance across devices.",
],


    link: "https://nex-call-sage.vercel.app/",
    type: "Full-Stack Video Calling Platform"
  },
  {
    id: 2,
    name: "XMedify",
    stack: [],
 points: [
  "Built XMedify, a responsive hospital booking app using React with API-driven filters for state and city.",
  "Implemented interactive components like FAQ, offers, and booking calendar, and deployed the app on Vercel.",
],


    link: "https://x-medify-roan.vercel.app/",
  type: "Hospital Appointment Booking Platform"
  },
  // {
  //   id: 3,
  //   name: "Qtify",
  //   stack: [],
  //  points: [
  // "Built Qtify, a responsive music streaming platform using React and Material UI with intuitive UI components.",
  // "Implemented custom sliders with Swiper.js, API-driven album/song rendering, and deployed the app on Vercel.",
  //   ],


  //   link: "https://qtify-frontend-gamma.vercel.app/",
  //   type: "Frontend Music Streaming Application",
  // },
  {
    id: 4,
    name: "Gauras",
    stack: [],
   points: [
  "Built Gauras, a 6-page responsive dairy product website using Vanilla JS, HTML, CSS, and Bootstrap.",
  "Added interactive elements like image slider and contact form, optimized images (↓50% load time), and deployed on Hostinger.",
],


    link: "https://gauras.co.in/",
    type: "Dairy Product Selling Platform"
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
            <div key={idx} className=" leading-none pb-1 ">
              <div className="flex gap-2 items-center">
                <span className="font-medium text-sm">{el.name} -</span>
                <span className="text-xs font-medium text-slate-600">
                  {el.type}
                </span>

                <a
                  href={el.link}
                  className="text-xs bg-slate-200 text-slate-600 px-1 font-bold rounded "
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
