import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3F2305] text-[#F5F5DC] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-[#D2B48C]">Esha</h3>
            <p className="text-sm mt-1">Frontend Developer</p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <NavLink
              to="/home"
              className="text-sm hover:text-[#D2B48C] transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm hover:text-[#D2B48C] transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="text-sm hover:text-[#D2B48C] transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className="text-sm hover:text-[#D2B48C] transition-colors"
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm hover:text-[#D2B48C] transition-colors"
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="border-t border-[#8B5A2B]/30 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#F5F5DC]/60 mb-4 md:mb-0">
              &copy; {currentYear} Esha. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <NavLink
                to="https://github.com/esha-gupta-11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC]/60 hover:text-[#D2B48C] transition-colors"
              >
                GitHub
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/esha-gupta-aa2889309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F5DC]/60 hover:text-[#D2B48C] transition-colors"
              >
                LinkedIn
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
