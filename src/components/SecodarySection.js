import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondarySection = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    movies.NowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20"></div>
        <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.TrendingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
        <MovieList title={"Horror"} movies={movies.NowPlayingMovies} />
      </div>
    )
  );
};
export default SecondarySection;
