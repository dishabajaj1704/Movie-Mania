import React from "react";

export const Footer = () => {
  return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-300 shadow p-6 dark:bg-slate-900 dark:border-slate-700">
      <p class="text-sm text-center text-gray-00 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear() + " "}
        {/*hange url once hosted*/}
        <a
          href="http://sl-filmfest.netlify.app/"
          class="hover:text-primary-800"
        >
          FilmFiesta &trade;
        </a>
        .All Rights Reserved
      </p>
    </footer>
  );
};
