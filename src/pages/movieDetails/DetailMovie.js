import React from "react";

export const DetailMovie = ({ movie }) => {
  const imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="flex justify-around flex-wrap py-5 max-md:px-5">
      <div className="max-w-sm">
        <img src={imagePath} alt={movie.title} />
      </div>
      <div className="max-w-2xl text-slate-800 dark:text-slate-50">
        <h1 className="text-5xl text-bold my-3"> {movie.title}</h1>
        <p className="my-4">{movie.overview} </p>
        <p className="my-4 flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="mr-2 border border-slate-300 rounded dark:border-slate-600 px-4 py-1.5"
            >
              {genre.name}
            </span>
          ))}
        </p>

        {/* Copied from flowbite */}

        <div class="flex items-center">
          <svg
            class="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">
            {movie.vote_average}
          </p>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span class="text-sm font-medium text-gray-900 underline dark:text-white">
            {movie.vote_count} Votes
          </span>
        </div>
        <hr className="my-4" />

        {/* Copied from Flowbite */}
        <div class="relative overflow-x-auto">
          <h2 className="text-2xl">Details:</h2>
          <table class="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Runtime
                </th>
                <td class="py-4">{movie.runtime}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Budget
                </th>
                <td class="py-4">{movie.budget}</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Revenue
                </th>
                <td class="py-4">{movie.revenue}</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Release Date
                </th>
                <td class="py-4">{movie.release_date}</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  IMDB Link
                </th>
                <td class="py-4">
                  <a
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
