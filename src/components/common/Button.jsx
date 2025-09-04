import React from "react";

export default function Button({
  label,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded-full font-semibold px-6 py-3 sm:px-8 sm:py-4 md:px-6 md:py-2 transition duration-300 bg-accent text-secondary border-b-2 hover:opacity-90 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
}
