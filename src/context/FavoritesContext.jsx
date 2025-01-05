import { createContext, useContext } from 'react';
import useLocalStorage from 'use-local-storage';

export const FavoritesContext = createContext(null);

export const FavoritesContextProvider = ({ children }) => {
  const [items, setItems] = useLocalStorage('favorites', []);

  const addToFavorites = (object) => {
    setItems([...items, object]);
  };

  const removeFromFavorites = (id) => {
    setItems(items.filter((item) => item._id !== id));
  };

  const isInFav = (id) => items.find((item) => item._id === id);

  const totalItems = items.length;

  const isEmpty = totalItems === 0;

  return (
    <FavoritesContext.Provider
      value={{
        items,
        addToFavorites,
        isInFav,
        removeFromFavorites,
        totalItems,
        isEmpty,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
