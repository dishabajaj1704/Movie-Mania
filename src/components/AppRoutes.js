import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetailsPage } from "../pages/MovieDetailsPage";
import { MoviePage } from "../pages/MoviePage";
import { PageNotFound } from "../pages/PageNotFound";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviePage apiPath={"movie/now_playing"} />} />
        <Route
          path="/movies/top-rated"
          element={<MoviePage apiPath={"movie/top_rated"} />}
        />
        <Route
          path="/movies/popular"
          element={<MoviePage apiPath={"movie/popular"} />}
        />
        <Route
          path="/movies/upcoming"
          element={<MoviePage apiPath={"movie/upcoming"} />}
        />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
