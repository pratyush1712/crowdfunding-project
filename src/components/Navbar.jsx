import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap px-2 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0">
            <Link to="/">
              <img
                src={Logo}
                className="h-6 sm:h-9 mr-2"
                alt="Fundstarter"
                loading="lazy"
              />
            </Link>
            <Link
              className="text-xs leading-relaxed inline-block font-bold mr-4 py-2 whitespace-nowrap uppercase "
              to="/explore"
            >
              Explore{" "}
            </Link>
            <Link
              className="text-xs leading-relaxed font-bold inline-block mr-4 py-2 whitespace-nowrap uppercase "
              to="/top10"
            >
              Our Top 10 finds{" "}
            </Link>
            <Link
              className="text-xs font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/favorites"
            >
              Team Favorites
            </Link>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between pt-1">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="text-xs leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    to="/campaign"
                  >
                    <span className="ml-2 font-bold">Start a Campaign</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="text-xs leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    to="/about"
                  >
                    <span className="ml-2 font-bold">What We Do</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="text-xs leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                    to="/profile"
                  >
                    |&nbsp; <PersonIcon sx={{ mb: 0.001 }} />{" "}
                    <span className="ml-2 font-bold">Profile</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
