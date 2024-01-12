import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { MovieCardSkeleton } from "../components/MovieCardSkeleton";
import useFetch from "../hooks/useFetch";

export const SearchPage = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const BASE_API = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { data: movies, isLoading, error, setUrl } = useFetch();

  useEffect(() => {
    const URL = `${BASE_API}${apiPath}?query=${queryTerm}&api_key=${API_KEY}`;
    setUrl(URL);
  }, [queryTerm, URL]);

  function renderSkeletons(count) {
    const skeletons = [];
    for (let i = 1; i <= count; i++) {
      skeletons.push(<MovieCardSkeleton key={i} />);
    }
    return skeletons;
  }

  const noResultTitle = `No Results found for:${queryTerm}`;
  const resultFoundTitle = `Results for:${queryTerm}`;
  return (
    <main>
      <section className="my-4">
        <h2 className="dark:text-slate-50 text-slate-800 text-4xl">
          {movies && movies.results.length === 0
            ? noResultTitle
            : resultFoundTitle}
        </h2>
      </section>
      <div className="flex flex-wrap justify-start">
        {isLoading && renderSkeletons(6)}
        {!isLoading &&
          movies &&
          movies.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </main>
  );
};
