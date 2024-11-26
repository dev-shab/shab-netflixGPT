import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTraileVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

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
    !trailerVideo && getMovieVideos();
  }, [movieId, trailerVideo, dispatch]);
};

export default useMovieTrailer;
