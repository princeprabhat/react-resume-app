import React from "react";
const miniProjects = [
  {
    name: "XExpense Tracker – Categorized tracking of daily expenses",
    link: "https://github.com/your-username/xexpense-tracker",
  },
  {
    name: "XBot - Chat UI with data persistence using localstorage",
    link: "https://github.com/your-username/xbot",
  },
  {
    name: "XWeatherApp - Weather app using live WeatherAPI data",
    link: "https://github.com/your-username/xweatherapp",
  },
  {
    name: "XCalculator – Interactive calculator for arithmetic operations",
    link: "https://github.com/your-username/xcalculator",
  },
  {
    name: "XStopwatch - Stopwatch with start, stop, and reset functions",
    link: "https://github.com/your-username/xstopwatch",
  },

  {
    name: "XIP Tracker – Track and display IP geolocation using API",
    link: "https://your-deployed-link.com/xip-tracker",
  },
  {
    name: "XGitHub Finder – Search GitHub profiles via username",
    link: "https://your-deployed-link.com/xgithub-finder",
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
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-800"
          >
            <li key={idx} className="py-[1px]">
              {el.name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default MiniProjects;
