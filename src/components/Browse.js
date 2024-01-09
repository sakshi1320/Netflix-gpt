import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovie";
import Header from "./Header";
import MainSection from "./MainSection";
import SecondarySection from "./SecodarySection";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header></Header>
      <MainSection />
      <SecondarySection />
    </div>
  );
};
export default Browse;
