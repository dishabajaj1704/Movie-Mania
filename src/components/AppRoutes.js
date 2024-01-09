import React from "react";
import { Route, Routes } from "react-router-dom";
import { MoviePage } from "../pages/MoviePage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={MoviePage} />
        <Route path="/movies/top-rated" element={MoviePage} />
        <Route path="/movies/top-rated" element={MoviePage} />
      </Routes>
    </>
  );
};
