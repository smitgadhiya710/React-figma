import React from "react";
import headphone from "../assets/landingPageImages/headphone.png";
import Subtract1 from "../assets/landingPageImages/Subtract1.png";
import Subtract2 from "../assets/landingPageImages/Subtract2.png";
import Subtract3 from "../assets/landingPageImages/Subtract3.png";
import placeholder from "../assets/landingPageImages/placeholder.png";
import Frame from "../assets/landingPageImages/Frame.png";
import Robot from "../assets/landingPageImages/Robot.png";
import Navbar from "../components/layout/Navbar";
import Box from "../components/layout/Box";
import Slider from "../components/layout/Slider";
import Footer from "../components/layout/Footer";
import { FooterBox } from "../components/layout/FooterBox";
import Button from "../components/common/Button";

function LandingPage() {
  return (
    <div className="max-w-[1920px] overflow-x-hidden">
      <div className="bg-primary-muted px-5 sm:px-20 md:px-20">
        <div className="mx-auto px-6 py-10">
          {/* <div>
            <Navbar />
            <hr className="my-3 md:my-23 lg:my-6 border-secondary-muted" />
          </div> */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-20 gap-10">
            <div className="flex-1 lg:pr-12 text-center md:text-left text-secondary">
              <p className="text-3xl sm:text-3xl md:text-3xl lg:text-6xl font-bold pb-4 md:pb-6">
                Revolutionize Your Podcast With AI Co-Hosts
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-6 md:pb-8 text-secondary">
                AI-driven, always available, and tailored to your show.
              </p>

              <Button label={"Get Started"} />
            </div>
            <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg">
              <img src={headphone} alt="headphone" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- Persona Templates ------------------- */}
      <div className="bg-primary relative">
        <div className="md:absolute md:-top-23 md:left-1/2 md:transform md:-translate-x-1/2 md:z-20">
          <Box />
        </div>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 py-16 sm:py-24 md:pt-45 px-5 sm:px-20">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">
            AI Co-Host Persona Templates
          </p>
          <p className="text-secondary-muted max-w-2xl text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button label={"Learn more"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src={Subtract1} alt="person 1" className="w-full h-auto" />
          <img
            src={Subtract2}
            alt="person 2"
            className="w-full h-auto rounded-t-3xl md:pt-5 lg:pt-6 xl:pt-9"
          />
          <img src={Subtract3} alt="person 3" className="w-full h-auto " />
        </div>
      </div>

      {/* ------------------- Dynamic Conversation ------------------- */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-12 sm:py-20 lg:py-28 px-5 sm:px-20 md:px-25 lg:px-20 xl:px-0">
        <div className="flex-1 text-center md:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary pb-4 sm:pb-6">
            Dynamic Conversation Generation
          </p>
          <p className="pb-3 sm:pb-4 text-secondary text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            dolorum! Cupiditate facere qui recusandae.
          </p>
          <p className="pb-6 sm:pb-10 text-secondary-muted text-xs sm:text-sm lg:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            deserunt nihil? Sit, enim. Cupiditate facere qui recusandae hic nisi
            eos pariatur laudantium delectus ullam molestias?
          </p>

          <Button label={"Try now for free"} />
        </div>

        <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-xl relative rounded-2xl p-[4px] sm:p-[6px] bg-gradient-to-r from-secondary to-accent shadow-lg">
          <img
            src={placeholder}
            alt="placeholder"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* ------------------- Multi topic ------------------- */}
      <div className="flex justify-center items-center overflow-x-hidden">
        <img src={Frame} alt="assistance" className="w-full h-auto" />
      </div>

      <div className="bg-primary py-20 px-5 sm:px-20 md:px-20 xl:px-25">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 text-secondary text-center justify-center items-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
            Multi-topic Expertise
          </p>
          <p className="max-w-2xl mx-auto text-base text-secondary-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolore delectus nihil ipsa aut. Nisi minima aut numquam doloribus
            at?
          </p>
          <div>
            <Button label={"Learn more"} />
          </div>

          <Slider />
        </div>
      </div>

      {/* ------------------- Voice Customization ------------------- */}
      <div className="bg-primary-muted px-5 sm:px-20 md:px-20 xl:px-25">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-16 sm:py-20 lg:py-28 px-4 sm:px-8">
          <div className="flex-1 w-full max-w-md relative rounded-2xl p-[6px] bg-gradient-to-r from-secondary to-accent shadow-lg">
            <img
              src={Robot}
              alt="robot"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary pb-6">
              Voice Customization
            </p>
            <p className="pb-8 text-secondary-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis modi unde vero laboriosam sit dolorem, repudiandae
              harum ea fuga deleniti accusamus iste reiciendis velit enim!
              AI-driven, always available, and tailored to your show.
            </p>
            <Button label={"Learn More"} />
          </div>
        </div>
      </div>

      {/* ------------------- Footer ------------------- */}
      <div className="md:bg-primary md:h-70"></div>
      <div className="md:relative">
        <div className="md:absolute md:-top-40 md:left-1/2 md:-translate-x-1/2 md:z-20 w-full md:px-20 lg:px-30">
          <FooterBox />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
