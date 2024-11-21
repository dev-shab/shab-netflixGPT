import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="text-black text-lg bg-white p-4 px-12 mx-2 rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="text-white text-lg bg-gray-500 p-4 px-12 mx-2 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
