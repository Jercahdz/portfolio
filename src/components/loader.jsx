import React from "react";

export default function Loader({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 z-50 background-loader-color flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        className="loader-video w-auto h-auto object-contain"
      >
        <source src="/loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}