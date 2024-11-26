import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
    !nowPlayingMovies.length && getNowPlayingMovies();
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayingMovies;
