import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map(({ original_title, poster_path, id }) => {
            return (
              poster_path && (
                <MovieCard
                  key={id}
                  title={original_title}
                  posterPath={poster_path}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
