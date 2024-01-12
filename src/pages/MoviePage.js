import React, { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { MovieCardSkeleton } from "../components/MovieCardSkeleton";
import useFetch from "../hooks/useFetch";

export const MoviePage = ({ apiPath }) => {
  const BASE_API = process.env.REACT_APP_API_URL;
  const { data: movies, error, isLoading, setUrl } = useFetch();
  useEffect(() => {
    setUrl(`${BASE_API}${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`);
  }, [apiPath]);

  function renderSkeletons(count) {
    const skeletons = [];
    for (let i = 1; i <= count; i++) {
      skeletons.push(<MovieCardSkeleton key={i} />);
    }
    return skeletons;
  }
  return (
    <main>
      <div className="flex flex-wrap justify-start">
        {isLoading && renderSkeletons(6)}
        {movies &&
          movies.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </main>
  );
};
