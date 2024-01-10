import React from "react";
import { MovieCard } from "../components/MovieCard";

export const MoviePage = () => {
  return (
    <main>
      <div className="flex flex-wrap justify-start">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </main>
  );
};
