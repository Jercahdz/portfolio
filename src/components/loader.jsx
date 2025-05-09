import React from "react";

export default function Loader({ fadeOut }) {
  return (
    <div className={`fixed inset-0 z-50 bg-black backdrop-blur-sm background-loader-color`}>
      <div
        className={`flex items-center justify-center w-full h-full transition-opacity duration-500 ${
          fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <video
          autoPlay
          muted
          className="w-auto h-auto object-cover "
        >
          <source src="/loader.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}