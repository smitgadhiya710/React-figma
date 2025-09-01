import React from "react";
import clock from "../../assets/landingPageImages/clock.png";
import message from "../../assets/landingPageImages/message.png";
import settings from "../../assets/landingPageImages/setting.png";

export default function Box() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around bg-primary px-6 sm:px-10 py-6 md:shadow rounded-3xl max-w-full sm:max-w-[700px] md:max-w-[900px] lg:max-w-full text-secondary gap-8 sm:gap-4">
      <div className="flex flex-col items-center text-center sm:px-4">
        <img
          src={clock}
          alt="clock"
          className="w-16 sm:w-14 md:w-16 lg:w-20 h-auto"
        />
        <p className="mt-3 font-medium text-base sm:text-sm md:text-lg lg:text-xl">
          24/7 Availability
        </p>
      </div>
      <div className="hidden md:block w-px h-20 border-secondary-muted"></div>

      <div className="flex flex-col items-center text-center sm:px-4">
        <img
          src={message}
          alt="message"
          className="w-16 sm:w-14 md:w-16 lg:w-20 h-auto"
        />
        <p className="mt-3 font-medium text-base sm:text-sm md:text-lg lg:text-xl">
          Dynamic Conversations
        </p>
      </div>
      <div className="hidden md:block w-px h-20 border-secondary-muted"></div>

      <div className="flex flex-col items-center text-center sm:px-4">
        <img
          src={settings}
          alt="settings"
          className="w-16 sm:w-14 md:w-16 lg:w-20 h-auto"
        />
        <p className="mt-3 font-medium text-base sm:text-sm md:text-lg lg:text-xl">
          Seamless Integration
        </p>
      </div>
    </div>
  );
}

export function FooterBox() {
  return (
    <div className="flex flex-col gap-6 bg-secondary text-primary md:rounded-2xl px-5 sm:px-10 py-10 sm:py-14 items-center text-center md:shadow-lg">
      <p className="text-2xl sm:text-3xl md:text-5xl font-bold">
        Join Our Newsletter
      </p>

      <p className="text-primary-muted max-w-xl text-sm sm:text-base">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem ipsum has been the industry standard dummy text.
      </p>

      <div className="flex flex-col sm:flex-row w-full max-w-md bg-primary rounded-2xl sm:rounded-full shadow-sm overflow-x-hidden px-2 py-2 gap-2 sm:gap-0">
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-secondary bg-transparent border-none text-sm rounded-full outline-none"
        />
        <button className="bg-accent text-secondary font-semibold text-sm rounded-full px-6 py-3 border-b-2">
          Subscribe
        </button>
      </div>
    </div>
  );
}
