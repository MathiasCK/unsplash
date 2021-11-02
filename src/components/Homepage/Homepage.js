import React, { useEffect } from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Images from '../Images-container/Images-container';

import {
  useHanldeSubmit,
  useUpdatePageValue,
  useUpdateSearchValue,
} from '../../context';

const Homepage = () => {
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

export default Homepage;
