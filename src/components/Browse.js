import React from "react";
import Header from "./Header";
import useNowPlatingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlatingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
