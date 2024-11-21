import React from "react";
import { TMDB_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-60 h-30 pr-4">
      <img alt={title} src={TMDB_IMAGE_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
