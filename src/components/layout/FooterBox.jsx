import React from "react";
import Button from "../common/Button";

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

        <Button label={"Subscribe"} />
      </div>
    </div>
  );
}
