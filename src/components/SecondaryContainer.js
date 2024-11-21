import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-96 relative z-20">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Trending" movies={movies.nowPlayingMovies} />
        <MovieList title="Horror" movies={movies.popularMovies} />
        <MovieList title="Comedy" movies={movies.nowPlayingMovies} />
        <MovieList title="Drama" movies={movies.popularMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
