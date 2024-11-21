import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
