import React from "react";
import { MovieCard } from "../components/MovieCard";
import useFetch from "../hooks/useFetch";

export const MoviePage = () => {
  const {
    data: movies,
    error,
    isLoading,
    setUrl,
  } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=79ad8f4a680df3224a502863cd4eebfb"
  );
  return (
    <main>
      <div className="flex flex-wrap justify-start">
        {movies &&
          movies.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </main>
  );
};
