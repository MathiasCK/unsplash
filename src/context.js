import { createContext, useContext } from 'react';

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const handleSubmit = (searchTerm, page) => {
    return fetchImages(searchTerm, page);
  };

  const fetchImages = async (searchTerm, page) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&per_page=12&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`,
      );
      const data = await response.json();
      const splicedData = spliceIntoChunks(data.results);
      return splicedData;
    } catch (error) {
      throw new Error(error);
    }
  };

  const spliceIntoChunks = arr => {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, 3);
      res.push(chunk);
    }
    return res;
  };

  return (
    <SearchContext.Provider
      value={{
        handleSubmit,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

export const useHanldeSubmit = () => useSearchContext().handleSubmit;
