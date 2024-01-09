import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResult } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-oopacity-80">
      <div>
        {movieNames.map((movieNames, index) => (
          <MovieList key={movieNames} title={movieNames} movies={movieResult[index]} />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestion;
