import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies);

  const getUpcomingMoviesMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !UpcomingMovies && getUpcomingMoviesMovies();
  }, []);
};
export default useUpcomingMovies;
