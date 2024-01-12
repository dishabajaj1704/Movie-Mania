import React from "react";
import TempImg from "../assests/TempImg.jpg";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const imageURL = movie.poster_path
    ? `${BASE_IMAGE_URL}${movie.poster_path}`
    : "https://placehold.co/382x573?text=No+Image";
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <Link to={`/movies/${movie.id}`}>
        <img className="rounded-t-lg" src={`${imageURL}`} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movies/${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.overview.substring(0, 150)}...
        </p>
        <Link
          to={`/movies/${movie.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-800 rounded-lg hover:bg-primary-1000 focus:outline-none "
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
