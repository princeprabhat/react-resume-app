import React from "react";
const miniProjects = [
  {
    name: "XExpense Tracker – Categorized tracking of daily expenses",
    link: "https://x-expensetracker-hazel.vercel.app/",
  },
  {
    name: "XBot - Chat UI with data persistence using localstorage",
    link: "https://x-bot-ai-chi.vercel.app/",
  },
  {
    name: "XWeatherApp - Weather app using live WeatherAPI data",
    link: "https://github.com/princeprabhat/Weather-App-React",
  },
  {
    name: "XCalculator – Interactive calculator for arithmetic operations",
    link: "https://github.com/princeprabhat/XCalculator",
  },

  {
    name: "Qtrip – Destination Booking with Ease",
    link: "https://qtrip-dynamic-theta-ten.vercel.app/",
  },
  {
    name: "XBoard - News feed website",
    link: "https://gentle-cactus-3c63cb.netlify.app/",
  },
  {
    name: "XGitHub Finder – Search GitHub profiles via username",
    link: "https://github.com/princeprabhat/GitHub-Profile-Searcher",
  },
];

const MiniProjects = () => {
  return (
    <div className="mt-0">
      <p className="font-semibold text-lg text-slate-800 tracking-wide uppercase ">
        Mini Projects
      </p>
      <ul className="list-disc list-outside px-5 text-xs text-slate-800">
        {miniProjects.map((el, idx) => (
          <a
            key={idx}
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800"
          >
            <li className="py-[1px]">{el.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default MiniProjects;
