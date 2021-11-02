import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({});

const token = process.env.UNSPLASH_TOKEN;
console.log(token);

export const SearchProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pageValue, setPageValue] = useState(1);

  const updateSearchValue = value => {
    setSearchValue(value);
  };

  const updatePageValue = value => {
    setPageValue(value);
  };

  const handleSubmit = async (searchTerm, page) =>
    await fetchImages(searchTerm, page);

  const fetchImages = async (searchTerm, page) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&per_page=12&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`,
      );
      const data = await response.json();
      const splicedData = spliceIntoChunks(data.results);
      setImages(splicedData);
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
        updateSearchValue,
        searchValue,
        updatePageValue,
        pageValue,
        images,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

export const useHanldeSubmit = () => useSearchContext().handleSubmit;

export const useUpdateSearchValue = () => useSearchContext().updateSearchValue;

export const useSearchValue = () => useSearchContext().searchValue;

export const useUpdatePageValue = () => useSearchContext().updatePageValue;

export const usePageValue = () => useSearchContext().pageValue;

export const useImages = () => useSearchContext().images;
