import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
// import openai_config from "../utils/openai";

const GptSearchBar = () => {
  const locale = useSelector((store) => store.config.language);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      TMDB_API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest soe movies for the query " +
    //   searchRef.current.value +
    //   ". Give me only names of 5 movies, comma separated like the example given ahead. Example: Godfather,Sholay,DON,Dilwale Dulhaniya Le Jayenge, Koi Mil Gaya";
    // const chatCompletion = await openai_config.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    const chatCompletion = "Marvel, Gift, Rain, Sun, Planet";
    const gptMovies = chatCompletion.split(", ");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[locale].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {language[locale].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
