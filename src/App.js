import React, { useEffect } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Images from './components/Images-container/Images-container';
import {
  useHanldeSubmit,
  useUpdatePageValue,
  useUpdateSearchValue,
} from './context';
import './styles/main.css';

const App = () => {
  const updateSearch = useHanldeSubmit();
  const setSearchValue = useUpdateSearchValue();
  const setPageValue = useUpdatePageValue();

  const searchValue = localStorage.getItem('searchValue') || 'random';
  const pageValue = localStorage.getItem('page') || 'random';

  useEffect(() => {
    updateSearch(searchValue, pageValue);
    setPageValue(pageValue);
    setSearchValue(searchValue);
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
