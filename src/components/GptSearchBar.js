import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langaugeConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movies in TMDB
  const searchGptMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
  };
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value)
    // make an API call to  get movie result
    const GptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ".only  gives me names of 5 movies ,comma separated like the example given ahead. Example Result :Gadar,Sholay,Golmaal,Don,Koi Mill Gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResult.choices) {
      //handle error
    }
    const gptMovies = gptResult.choices?.[0]?.message.content.split(",");
    // it will give array of 5 movies
    // for each movies search it on TMDB

    const promiseArray = gptMovies.map((movie) => searchGptMovieTMDB(movie));
    // [promise,promise,promise,promise,promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResult: tmdbResults }));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
