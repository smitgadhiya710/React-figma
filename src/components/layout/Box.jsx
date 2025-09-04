import React from "react";
import clock from "../../assets/landingPageImages/clock.png";
import message from "../../assets/landingPageImages/message.png";
import settings from "../../assets/landingPageImages/setting.png";

export default function Box() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around bg-primary-muted px-6 sm:px-10 py-6 md:shadow rounded-3xl max-w-full sm:max-w-[700px] md:max-w-[900px] lg:max-w-full text-secondary gap-8 sm:gap-4">
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
