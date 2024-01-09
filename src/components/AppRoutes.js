import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetailsPage } from "../pages/MovieDetailsPage";
import { MoviePage } from "../pages/MoviePage";
import { PageNotFound } from "../pages/PageNotFound";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="/movies/top-rated" element={<MoviePage />} />
        <Route path="/movies/popular" element={<MoviePage />} />
        <Route path="/movies/upcoming" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};