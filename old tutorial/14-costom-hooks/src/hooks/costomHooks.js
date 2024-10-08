import { useState, useEffect } from "react";

// useTitle : setTitles of page
export const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

// useLocalState : create State that seves in localStoreg of browser
export const useLocalState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localState = window.localStorage.getItem(key);
    return localState ? JSON.parse(localState) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

const costomHooks = {
  // useTitle : setTitles of page
  useTitle: (title) => {
    useEffect(() => {
      document.title = title;
    }, []);
  },

  // useLocalState : create State that seves in localStoreg of browser
  useLocalState: (key, initialValue) => {
    const [value, setValue] = useState(() => {
      const localState = window.localStorage.getItem(key);
      return localState ? JSON.parse(localState) : initialValue;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
  },
};

export default costomHooks;
