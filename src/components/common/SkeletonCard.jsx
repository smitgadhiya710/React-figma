import React from "react";

export default function SkeletonCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>

      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}
