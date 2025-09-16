import React, { useContext, useState } from "react";
import Mike from "../../assets/landingPageImages/Mike.png";
import SearchIcon from "../../assets/landingPageImages/Search.svg";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { myContext } from "../../context/ContextProvider";
import { useLogoutMutation } from "../../feature/authSlice";
import ConfirmationModal from "../common/ConfirmationModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { searchPodcast, setSearchPodcast } = useContext(myContext);
  const [userLogout] = useLogoutMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));

  function handleButtone(val) {
    if (val === "subscribe") {
      navigate("/login");
    }

    if (val === "logout") {
      userLogout({ token });
      localStorage.removeItem("token");
      setIsModalOpen(false);
      navigate("/login");
    }
  }

  return (
    <nav className="max-w-screen bg-primary-muted px-4 py-2 md:py-7 sm:px-6 lg:px-10">
      <div className="flex justify-between items-center h-16 md:flex-col md:gap-3 lg:flex-row">
        <div className="flex items-center gap-2">
          <img src={Mike} alt="fm mike photo" className="w-10 h-10" />
          <p className="text-secondary text-lg">CoHost FM</p>
        </div>

        <div className="hidden md:flex gap-6 text-secondary ">
          <Link
            to="/home"
            className={`transition-colors ${
              location.pathname.startsWith("/home")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Home
          </Link>
          <Link
            to="/podcast"
            className={`transition-colors ${
              location.pathname.startsWith("/podcast")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Podcast
          </Link>

          <Link
            to="/episodes"
            className={`transition-colors ${
              location.pathname.startsWith("/episodes")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Episodes
          </Link>
          <Link
            to="/template"
            className={`transition-colors ${
              location.pathname.startsWith("/template")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Persona Template
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center w-72 px-3 py-2 bg-gray border-secondary-muted rounded-full shadow-sm">
            <img src={SearchIcon} alt="search" className="w-5 h-5" />
            <input
              value={searchPodcast}
              onClick={() => {
                if (!location.pathname.startsWith("/podcast")) {
                  navigate("/podcast");
                }
              }}
              onChange={(e) => setSearchPodcast(e.target.value)}
              type="text"
              placeholder="Search your podcast"
              className="flex-1 px-2 text-secondary bg-transparent border-secondary-muted focus:outline-none text-sm"
            />
          </div>

          <Button
            label={token ? "Logout" : "Subscribe"}
            onClick={() =>
              token ? setIsModalOpen(true) : handleButtone("subscribe")
            }
          />
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <TfiAlignJustify />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link
            to="/home"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors ${
              location.pathname.startsWith("/home")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Home
          </Link>
          <Link
            to="/podcast"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors ${
              location.pathname.startsWith("/podcast")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Podcast
          </Link>
          <Link
            to="/episodes"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors ${
              location.pathname.startsWith("/episodes")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Episodes
          </Link>
          <Link
            to="/template"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors ${
              location.pathname.startsWith("/template")
                ? "text-accent"
                : "text-secondary hover:text-accent"
            }`}
          >
            Persona Template
          </Link>

          <div className="flex items-center gap-2 bg-gray border-secondary-muted rounded-full px-3 py-2 shadow-sm">
            <img src={SearchIcon} alt="search" className="w-5 h-5" />
            <input
              value={searchPodcast}
              onClick={() => {
                if (!location.pathname.startsWith("/podcast")) {
                  navigate("/podcast");
                }
              }}
              onChange={(e) => setSearchPodcast(e.target.value)}
              type="text"
              placeholder="Search your podcast"
              className="flex-1 px-2 text-secondary bg-transparent border-none focus:outline-none text-sm"
            />
          </div>

          <Button
            label={"Subscibe"}
            onClick={() => {
              setMenuOpen(!menuOpen), navigate("/login");
            }}
          />
        </div>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        btnTitle={"logout"}
        message="Are you sure you want to logout ?"
        onConfirm={() => handleButtone("logout")}
        onCancel={() => setIsModalOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
