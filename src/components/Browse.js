import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovie";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainSection from "./MainSection";
import SecondarySection from "./SecodarySection";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovie";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header></Header>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainSection />
          <SecondarySection />
        </>
      )}
    </div>
  );
};
export default Browse;
