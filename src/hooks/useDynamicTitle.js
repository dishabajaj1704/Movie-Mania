import React, { useEffect } from "react";

export const useDynamicTitle = (title, defaultTitle = "Film FIesta") => {
  useEffect(() => {
    document.title = title;

    //cleanup code
    //In this case, the cleanup function resets the document.title to the defaultTitle when the component is unmounted
    return () => {
      document.title = defaultTitle;
    };
  });
};
