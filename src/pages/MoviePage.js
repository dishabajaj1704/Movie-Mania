import React, { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import useFetch from "../hooks/useFetch";

export const MoviePage = ({ apiPath }) => {
  const BASE_API = "https://api.themoviedb.org/3/";
  const { data: movies, error, isLoading, setUrl } = useFetch();
  useEffect(() => {
    setUrl(`${BASE_API}${apiPath}?api_key=79ad8f4a680df3224a502863cd4eebfb`);
  },[apiPath]);
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
