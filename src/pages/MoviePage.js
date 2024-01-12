import React, { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import useFetch from "../hooks/useFetch";

export const MoviePage = ({ apiPath }) => {
  const BASE_API = process.env.REACT_APP_API_URL;
  const { data: movies, error, isLoading, setUrl } = useFetch();
  useEffect(() => {
    setUrl(`${BASE_API}${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`);
  }, [apiPath]);
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
