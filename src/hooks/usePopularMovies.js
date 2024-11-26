import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
    !popularMovies.length && getPopularMovies();
  }, [dispatch, popularMovies]);
};

export default usePopularMovies;
