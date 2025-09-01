import React from "react";
import Navbar from "./Navbar";
import headphone from "../../assets/landingPageImages/headphone.png";
import Subtract1 from "../../assets/landingPageImages/Subtract1.png";
import Subtract2 from "../../assets/landingPageImages/Subtract2.png";
import Subtract3 from "../../assets/landingPageImages/Subtract3.png";
import placeholder from "../../assets/landingPageImages/placeholder.png";
import Frame from "../../assets/landingPageImages/Frame.png";
import Robot from "../../assets/landingPageImages/Robot.png";
import Box, { FooterBox } from "./Box";
import Footer from "./Footer";
import Slider from "./Slider";

function LandingPage() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10 pb-30">
          <Navbar />
          <hr className="my-6 border-gray-300" />
          {/* Hero */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-20 gap-10">
            <div className="flex-1 pr-0 lg:pr-12 text-[#393939] text-center lg:text-left">
              <p className="text-4xl sm:text-5xl xl:text-6xl font-bold pb-6">
                Revolutionize Your Podcast With AI Co-Hosts
              </p>
              <p className="pb-8 text-base sm:text-lg">
                Ai-driven, always available, and tailored to your show.
              </p>
              <button className="bg-[#DA9EFF] text-[#393939] font-semibold text-sm rounded-full px-6 py-3 shadow">
                Get Started
              </button>
            </div>
            <div className="flex-1 max-w-md">
              <img src={headphone} alt="headphone" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- Persona Templates ------------------- */}
      <div className="bg-white relative">
        <div className="absolute -top-23 left-1/2 transform -translate-x-1/2 z-20">
          <Box />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 py-24 pt-50 px-4">
          <p className="text-3xl sm:text-4xl font-semibold text-gray-900">
            AI Co-Host Persona Templates
          </p>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#DA9EFF] text-[#393939] font-semibold text-sm rounded-full px-6 py-3">
            Learn more
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-full mx-auto px-4">
          <img
            src={Subtract1}
            alt="person 1"
            className="w-full sm:w-1/3 h-auto"
          />
          <img
            src={Subtract2}
            alt="person 2"
            className="w-full sm:w-1/3 h-auto rounded-t-3xl pt-10"
          />
          <img
            src={Subtract3}
            alt="person 3"
            className="w-full sm:w-1/3 h-auto"
          />
        </div>

        {/* ------------------- Dynamic Conversation ------------------- */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-28 px-4">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-3xl sm:text-4xl font-bold pb-6">
              Dynamic Conversation Generation
            </p>
            <p className="pb-4 text-[#262626] text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              dolorum! Cupiditate facere qui recusandae.
            </p>
            <p className="pb-10 text-[#262626] text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              deserunt nihil? Sit, enim. Cupiditate facere qui recusandae hic
              nisi eos pariatur laudantium delectus ullam molestias?
            </p>
            <button className="bg-[#DA9EFF] text-[#393939] font-semibold text-sm rounded-full px-6 py-3">
              Try now for free
            </button>
          </div>

          <div className="flex-1 max-w-md relative rounded-2xl p-[6px] bg-gradient-to-r from-[#393939] to-[#DA9EFF] shadow-lg">
            <img
              src={placeholder}
              alt="placeholder"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* ------------------- Multi topic ------------------- */}
      <div className="w-full">
        <img src={Frame} alt="assistance" className="w-full h-auto" />
      </div>

      <div className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 text-[#393939] text-center">
          <p className="text-3xl sm:text-4xl font-bold">
            Multi-topic Expertise
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolore delectus nihil ipsa aut. Nisi minima aut numquam doloribus
            at?
          </p>
          <div>
            <button className="bg-[#DA9EFF] text-[#393939] font-semibold text-sm rounded-full px-6 py-3">
              Learn more
            </button>
          </div>

          <Slider />
        </div>
      </div>

      {/* ------------------- Voice Customization ------------------- */}
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-28 px-4">
          <div className="flex-1 max-w-md relative rounded-2xl p-[6px] bg-gradient-to-r from-[#393939] to-[#DA9EFF] shadow-lg">
            <img
              src={Robot}
              alt="robot"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <p className="text-3xl sm:text-5xl font-bold text-[#393939] pb-6">
              Voice Customization
            </p>
            <p className="pb-8 text-[#262626] text-sm sm:text-base leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis modi unde vero laboriosam sit dolorem, repudiandae
              harum ea fuga deleniti accusamus iste reiciendis velit enim!
              AI-driven, always available, and tailored to your show.
            </p>
            <button className="bg-[#DA9EFF] text-[#393939] font-semibold text-sm rounded-full px-6 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ------------------- Footer ------------------- */}
      <div className="bg-white h-70"></div>
      <div className="relative">
        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 z-20">
          <FooterBox />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;






// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

import React from "react";
import clock from "../../assets/landingPageImages/clock.png";
import message from "../../assets/landingPageImages/message.png";
import settings from "../../assets/landingPageImages/setting.png";

export default function Box() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around bg-white px-20 py-6 shadow rounded-3xl sm:w-310 text-[#393939]">
      <div className="flex flex-col items-center justify-center sm:px-6">
        <img src={clock} alt="clock" className="w-100 sm:w-auto" />
        <p className="mt-2 font-medium text-6xl sm:text-lg">
          24/7 Availability
        </p>
      </div>
      {/* <div className="w-px h-20 bg-gray-200"></div> */}

      <div className="flex flex-col items-center justify-center px-6">
        <img src={message} alt="message" className="w-100 sm:w-auto" />
        <p className="mt-2 font-medium text-6xl sm:text-lg">
          Dynamic Conversations
        </p>
      </div>
      {/* <div className="w-px h-20 bg-gray-200"></div> */}

      <div className="flex flex-col items-center justify-center px-6">
        <img src={settings} alt="settings" className="w-100 sm:w-auto" />
        <p className="mt-2 font-medium text-6xl sm:text-lg">
          Seamless Integration
        </p>
      </div>
    </div>
  );
}

export function FooterBox() {
  return (
    <div className="flex flex-col gap-6 bg-[#393939] text-white rounded-2xl px-10 py-14 items-center text-center max-w-7xl mx-auto shadow-lg">
      <p className="text-3xl md:text-5xl font-bold">Join Our Newsletter</p>

      <p className="text-gray-300 max-w-xl text-sm md:text-base">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem ipsum has been the industry standard dummy text.
      </p>

      <div className="flex w-full max-w-2xl px-3 py-2 bg-white rounded-full shadow-sm">
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-1 px-3 text-gray-700 bg-transparent border-none focus:outline-none text-sm"
        />
        <button className="bg-[#DA9EFF] text-[#393939] font-semibold text-sm rounded-full px-6 py-2">
          Subscribe
        </button>
      </div>
    </div>
  );
}
