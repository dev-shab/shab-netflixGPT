import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTraileVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      const filterData = json?.results.filter(({ type }) => type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTraileVideo(trailer));
    };
    getMovieVideos();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;