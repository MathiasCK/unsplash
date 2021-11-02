import React, { useEffect } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Images from './components/images-container/Images-container';
import {
  useHanldeSubmit,
  useImages,
  usePageValue,
  useSearchValue,
  useUpdatePageValue,
  useUpdateSearchValue,
} from './context';
import './main.css';

const App = () => {
  const updateSearch = useHanldeSubmit();
  const searchValue = useSearchValue();
  const setSearchValue = useUpdateSearchValue();
  const pageValue = usePageValue();
  const setPageValue = useUpdatePageValue();
  const images = useImages();

  useEffect(() => {
    updateSearch('random', 1);
    setPageValue(1);
    setSearchValue('random');
  }, []);

  return (
    <>
      <Form />
      <Header />
      <Images />
    </>
  );
};

export default App;
