import { useState, useEffect } from "react";

const getColorTheme = (key, initialState) => {
  const storageValue = localStorage.getItem(key);
  return storageValue ? JSON.parse(storageValue) : initialState;
};

const usePersistedThemeHook = (key, initialState) => {
  const [state, setState] = useState(getColorTheme(key, initialState));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedThemeHook;
