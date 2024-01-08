import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainSection from "./MainSection";
import SecondarySection from "./SecodarySection";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header></Header>
      <MainSection />
      <SecondarySection />
    </div>
  );
};
export default Browse;
