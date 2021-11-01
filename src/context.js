import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({
    searchTerm: 'random',
    page: '1',
  });

  const searchHandler = obj => {
    setSearch(obj);
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        searchHandler,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

export const useSearchCart = () => useSearchContext().search;

export const useSearchHandler = () => useSearchContext().searchHandler;
