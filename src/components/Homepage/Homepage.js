import React, { useEffect } from 'react';
import Form from '../form/Form';
import Header from '../header/Header';
import Images from '../images-container/Images-container';

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
    /* eslint-disable */
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
