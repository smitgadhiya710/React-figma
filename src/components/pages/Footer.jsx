import React from "react";
import facebookLogo from "../../assets/landingPageImages/facebookLogo.svg";
import spotifyLogo from "../../assets/landingPageImages/spotifyLogo.svg";
import youtubeLogo from "../../assets/landingPageImages/youtubeLogo.svg";
import Mike from "../../assets/landingPageImages/Mike.png";

function Footer() {
  return (
    <footer className="flex flex-col bg-accent-muted text-secondary pt-20 md:pt-60 pb-10 px-10 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-secondary">
          <a
            href="/podcast"
            className="hover:text-secondary-muted transition-colors"
          >
            Podcast
          </a>
          <a
            href="/episodes"
            className="hover:text-secondary-muted transition-colors"
          >
            Episodes
          </a>
          <a
            href="/persona-template"
            className="hover:text-secondary-muted transition-colors"
          >
            Persona Template
          </a>
        </div>

        <div className="flex gap-5 justify-center">
          <img
            src={facebookLogo}
            alt="facebookLogo"
            className="w-6 h-6 hover:opacity-75 transition-opacity cursor-pointer"
          />
          <img
            src={spotifyLogo}
            alt="spotifyLogo"
            className="w-6 h-6 hover:opacity-75 transition-opacity cursor-pointer"
          />
          <img
            src={youtubeLogo}
            alt="youtubeLogo"
            className="w-6 h-6 hover:opacity-75 transition-opacity cursor-pointer"
          />
        </div>
      </div>

      <hr className="my-6 border-secondary-muted max-w-6xl mx-auto w-full" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary max-w-6xl mx-auto w-full gap-4">
        <p className="text-center md:text-left">
          © 2024 CoHost FM. All rights reserved.
        </p>

        <div className="flex gap-2 items-center">
          <img
            src={Mike}
            alt="fm mike photo"
            className="w-8 h-8 text-secondary"
          />
          <p className="font-bold text-secondary">CoHost FM</p>
        </div>

        <div className="flex gap-6">
          <a
            href="/terms"
            className="hover:text-secondary-muted transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="/privacy"
            className="hover:text-secondary-muted transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
