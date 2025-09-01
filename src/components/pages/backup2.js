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
        <div className="max-w-6xl mx-auto px-6 py-10 pb-30">
          <Navbar />
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-10">
            <div className="flex-1 lg:pr-12 justify-between items-center lg:text-left text-[#393939]">
              <p className="sm:text-5xl text-8xl lg:text-6xl font-bold pb-6">
                Revolutionize Your Podcast With AI Co-Hosts
              </p>
              <p className="sm:pb-8 pb-12 text-6xl sm:text-lg">
                Ai-driven, always available, and tailored to your show.
              </p>
              <button className="bg-[#DA9EFF] text-[#393939] font-semibold max-w-fit max-h-fit sm:text-sm text-5xl   rounded-full sm:px-6 sm:py-3 px-12 py-6 shadow">
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
        <div className="sm:absolute sm:-top-23 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:z-20">
          <Box />
        </div>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 py-24 pt-50">
          <p className="text-4xl font-semibold text-gray-900">
            AI Co-Host Persona Templates
          </p>
          <p className="text-gray-500 max-w-2xl text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#DA9EFF] text-[#393939] font-semibold text-sm rounded-full px-6 py-3">
            Learn more
          </button>
        </div>
        <div className="flex items-start justify-center gap-6 max-w-full mx-auto">
          <img src={Subtract1} alt="person 1" className="w-1/3 h-auto" />
          <img
            src={Subtract2}
            alt="person 2"
            className="w-1/3 h-auto rounded-t-3xl pt-10"
          />
          <img src={Subtract3} alt="person 3" className="w-1/3 h-auto" />
        </div>
        {/* ------------------- Dynamic Conversation ------------------- */}
        {/* <div className="max-w-7xl mx-auto flex items-center justify-between gap-16 py-28">
          <div className="flex-1">
            <p className="text-4xl font-bold pb-6">
              Dynamic Conversation Generation
            </p>
            <p className="pb-4 text-[#262626] text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              dolorum! Cupiditate facere qui recusandae.
            </p>
            <p className="pb-10 text-[#262626] text-sm leading-relaxed">
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
        </div> */}
      </div>

      {/* ------------------- Multi topic ------------------- */}
      <div className="w-full">
        <img src={Frame} alt="assistance" className="w-full h-auto" />
      </div>

      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 text-[#393939] text-center">
          <p className="text-4xl font-bold">Multi-topic Expertise</p>
          <p className="max-w-2xl mx-auto text-base text-gray-600">
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
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-16 py-28">
          <div className="flex-1 max-w-md relative rounded-2xl p-[6px] bg-gradient-to-r from-[#393939] to-[#DA9EFF] shadow-lg">
            <img
              src={Robot}
              alt="robot"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="flex-1 text-left">
            <p className="text-5xl font-bold text-[#393939] pb-6">
              Voice Customization
            </p>
            <p className="pb-8 text-[#262626] text-base leading-relaxed">
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

// @layer utilities {
//   .bg-gray {
//     /* gray-100 */
//     background-color: var(--primary-muted);
//   }
//   .bg-white {
//     background-color: var(--primary);
//   }
//   .bg-darkgray {
//     /* custom dark gray */
//     background-color: #393939;
//   }
//   .bg-pink {
//     background-color: var(--accent);
//   }
//   .bg-lightpink {
//     background-color: #f6eafe;
//   }

//   /* ----------------- Border colors----------------- */
//   .border-underline {
//     /* gray-300 */
//     border-color: #d1d5db;
//   }

//   /*------------------- Text colors-------------------- */
//   .text-boldgray {
//     /* gray-900 */
//     color: #111827;
//   }
//   .text-gray {
//     /* custom dark gray */
//     color: #393939;
//   }
//   .text-semigray {
//     /* gray-500 */
//     color: #6b7280;
//   }
//   .text-black {
//     color: #000000;
//   }
//   .text-white {
//     color: #ffffff;
//   }
// }
