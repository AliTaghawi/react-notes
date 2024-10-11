import { useEffect, useState } from "react";

const useLocalStorage = (key, initialSate) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialSate;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export { useLocalStorage };
