import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap px-2 mb-3">
        <div className="container md:px-4 mx-auto flex xs:flex-wrap items-center justify-between">
          <div className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0">
            <div to="/" className="md:pb-1 lg:pt-2">
              <img
                src={Logo}
                className="h-6 sm:h-9 mr-2"
                alt="Fundstarter"
                loading="lazy"
              />
            </div>
            <div
              className="text-xs lg:text-sm leading-relaxed inline-block font-bold md:md:mr-4 sm:mr-1 pb-1 lg:pt-2 whitespace-nowrap uppercase "
              to="/explore"
            >
              Explore{" "}
            </div>
            <div
              className="text-xs lg:text-sm leading-relaxed font-bold inline-block md:mr-4 sm:mr-1 pb-1 lg:pt-2 whitespace-nowrap uppercase "
              to="/top10"
            >
              Our Top 10 finds{" "}
            </div>
            <div
              className="text-xs lg:text-sm font-bold leading-relaxed inline-block md:mr-4 sm:mr-1 pb-1 lg:pt-2 whitespace-nowrap uppercase"
              to="/favorites"
            >
              Team Favorites
            </div>
            {/* <button
              className=" cursor-pointer text-xl leading-none px-3 py-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">Lol</i>
            </button> */}
          </div>
          <div>
            <div className="container md:px-4 md:mx-auto flex flex-wrap items-center justify-between pt-1">
              <ul className="flex xs:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <div
                    className="text-xs lg:text-sm leading-relaxed inline-block md:mr-4 sm:mr-1 pt-3.5 whitespace-nowrap uppercase"
                    to="/campaign"
                  >
                    <span className="md:ml-2 font-bold">Start a Campaign</span>
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="text-xs lg:text-sm leading-relaxed inline-block md:mr-4 sm:mr-1 pt-3.5 py-2 whitespace-nowrap uppercase"
                    to="/about"
                  >
                    <span className="md:ml-2 font-bold">What We Do</span>
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    className="text-xs lg:text-sm leading-relaxed inline-block md:mr-4 sm:mr-1 pt-2.5 py-2 whitespace-nowrap uppercase "
                    to="/profile"
                  >
                    |&nbsp; <PersonIcon sx={{ mb: 0.001 }} />{" "}
                    <span className="ml-2 font-bold">Profile</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
