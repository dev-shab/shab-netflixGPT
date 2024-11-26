import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="text-black text-lg bg-white py-2 md:py-4 px-6 md:px-12 mx-2 rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:inline-block text-white text-lg bg-gray-500 p-4 px-12 mx-2 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
