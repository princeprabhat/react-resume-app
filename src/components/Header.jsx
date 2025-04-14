import React from "react";

const Header = () => {
  return (
    <div className="resume-introduction flex justify-between align-middle px-4  mb-2">
      <div className="">
        <div className="text-slate-800 font-bold text-4xl mb-2">
          Prince Prabhat
        </div>
        <div className="text-xs font-medium text-slate-600  bg-slate-200 px-1 ">
          Full Stack Developer | JavaScript | MERN Stack | NextJS | Golang |
          Core Java | AWS
        </div>
      </div>

      <div className="text-xs text-right font-medium text-slate-800 leading-6">
        <a href="tel:+919304692093" className="block hover:underline">
          📞 +91-9304692093
        </a>
        <a
          href="mailto:princeprabhat1996@gmail.com"
          className="block hover:underline"
        >
          📧 princeprabhat1996@gmail.com
        </a>
        <p>🏠 Haridwar, Uttarakhand, India</p>
      </div>
    </div>
  );
};

export default Header;
