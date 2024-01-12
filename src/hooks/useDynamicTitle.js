import React, { useEffect } from "react";

export const useDynamicTitle = (title, defaultTitle = "Film FIesta") => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = defaultTitle;
    };
  });
};
