import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondarySection = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    movies.NowPlayingMovies && (
      <div className="bg-black ">
        <div className="-mt-52 pl-12 relative z-20"></div>
        <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Upcoming"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.NowPlayingMovies} />
      </div>
    )
  );
};
export default SecondarySection;
