import React, { useState } from "react";
import Mike from "../../assets/landingPageImages/Mike.png";
import SearchIcon from "../../assets/landingPageImages/Search.svg";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="max-w-screen px-4 sm:px-6 lg:px-10">
      <div className="flex justify-between items-center h-16 md:flex-col md:gap-3 lg:flex-row">
        <div className="flex items-center gap-2">
          <img src={Mike} alt="fm mike photo" className="w-10 h-10" />
          <p className="text-secondary text-lg">CoHost FM</p>
        </div>

        <div className="hidden md:flex gap-6 text-secondary ">
          <a href="/home" className="hover:text-accent transition-colors">
            Home
          </a>
          <a href="/podcast" className="hover:text-accent transition-colors">
            Podcast
          </a>
          <a href="/episodes" className="hover:text-accent transition-colors">
            Episodes
          </a>
          <a href="/template" className="hover:text-accent transition-colors">
            Persona Template
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center w-72 px-3 py-2 bg-gray border-secondary-muted rounded-full shadow-sm">
            <img src={SearchIcon} alt="search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search your podcast"
              className="flex-1 px-2 text-secondary bg-transparent border-secondary-muted focus:outline-none text-sm"
            />
          </div>
          <button className="bg-accent text-secondary font-semibold text-sm rounded-full px-6 py-2 border-b-2">
            Subscribe
          </button>
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
          <a href="/home" className="hover:text-accent transition-colors">
            Home
          </a>
          <a href="/podcast" className="hover:text-accent transition-colors">
            Podcast
          </a>
          <a href="/episodes" className="hover:text-accent transition-colors">
            Episodes
          </a>
          <a href="/template" className="hover:text-accent transition-colors">
            Persona Template
          </a>

          <div className="flex items-center gap-2 bg-gray border-secondary-muted rounded-full px-3 py-2 shadow-sm">
            <img src={SearchIcon} alt="search" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search your podcast"
              className="flex-1 px-2 text-secondary bg-transparent border-none focus:outline-none text-sm"
            />
          </div>

          <button className="bg-accent text-secondary font-semibold text-sm rounded-full px-6 py-2 w-full border-b-2">
            Subscribe
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
