import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackgroud";
import VideoTitle from "./VideoTitle";

const MainSection = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  // if (movies === null) return;
  if (!movies) return;
  const mainMovies = movies[0];
  // console.log(mainMovies, "main");
  const { original_title, overview, id } = mainMovies;
  return (
    <div>
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};
export default MainSection;
